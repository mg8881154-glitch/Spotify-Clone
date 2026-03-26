import { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {

  const audioRef = useRef(new Audio());
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [PlayerStatus, setPlayerStatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: { minute: 0, second: 0 },
    totalTime: { minute: 0, second: 0 }
  });

  // 🎵 Load song when track changes
  useEffect(() => {
    if (!track?.file) return;

    audioRef.current.src = track.file;

    audioRef.current.play()
      .then(() => setPlayerStatus(true))
      .catch(() => setPlayerStatus(false));

  }, [track]);

  // ▶️ Play
  const play = async () => {
    await audioRef.current.play();
    setPlayerStatus(true);
  };

  // ⏸ Pause
  const pause = () => {
    audioRef.current.pause();
    setPlayerStatus(false);
  };

  // ⏱ Time + Progress
  useEffect(() => {
    const audio = audioRef.current;

    const update = () => {
      const current = audio.currentTime;
      const duration = audio.duration || 0;

      setTime({
        currentTime: {
          minute: Math.floor(current / 60),
          second: Math.floor(current % 60)
        },
        totalTime: {
          minute: Math.floor(duration / 60),
          second: Math.floor(duration % 60)
        }
      });

      if (seekBar.current && duration) {
        seekBar.current.style.width =
          (current / duration) * 100 + "%";
      }
    };

    audio.addEventListener("timeupdate", update);
    return () => audio.removeEventListener("timeupdate", update);

  }, []);

  // 🎯 Seek
  const seekSong = (e) => {
    const width = seekBg.current.offsetWidth;
    const clickX = e.nativeEvent.offsetX;

    audioRef.current.currentTime =
      (clickX / width) * audioRef.current.duration;
  };

  // 🎵 Play by ID
  const playWithId = (id) => {
    const selected = songsData.find(s => s.id === id);
    if (selected) setTrack(selected);
  };

  // ⏭ Next Song
  const next = () => {
    const currentIndex = songsData.findIndex(s => s.id === track.id);
    if (currentIndex < songsData.length - 1) {
      setTrack(songsData[currentIndex + 1]);
    }
  };

  // ⏮ Previous Song
  const previous = () => {
    const currentIndex = songsData.findIndex(s => s.id === track.id);
    if (currentIndex > 0) {
      setTrack(songsData[currentIndex - 1]);
    }
  };

  const value = {
    seekBg,
    seekBar,
    PlayerStatus,
    play,
    pause,
    track,
    time,
    seekSong,
    playWithId,
    next,
    previous
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
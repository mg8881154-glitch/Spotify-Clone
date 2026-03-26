import React, { useContext } from 'react'
import { assets } from '../assets/assets.js'
import { PlayerContext } from '../components/PlayerContext.jsx'

const Player = () => {

  const context = useContext(PlayerContext);

  // ✅ SAFE CHECK (important)
  if (!context) return null;

  const {
    seekBar,
    seekBg,
    PlayerStatus,
    play,
    pause,
    track,
    time,
    seekSong,
    next,
    previous
  } = context;

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>

      {/* Left */}
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={track?.image} alt="" />
        <div>
          <p>{track?.name}</p>
          <p className='text-sm'>{track?.desc?.slice(0, 12)}</p>
        </div>
      </div>

      {/* Center */}
      <div className='flex flex-col items-center gap-1 m-auto'>

        {/* Controls */}
        <div className='flex gap-4 items-center'>
          <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />

          {
            PlayerStatus ? (
              <img 
                onClick={pause} 
                className='w-6 cursor-pointer' 
                src={assets.pause_icon} 
                alt="" 
              />
            ) : (
              <img 
                onClick={play} 
                className='w-6 cursor-pointer' 
                src={assets.play_icon} 
                alt="" 
              />
            )
          }

          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
        </div>

        {/* Progress */}
        <div className='flex items-center gap-5 w-full'>

          {/* Current Time */}
          <p>
            {time?.currentTime?.minute || 0}:
            {String(time?.currentTime?.second || 0).padStart(2, '0')}
          </p>

          {/* Seek Bar */}
          <div
            ref={seekBg}
            onClick={seekSong}
            className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'
          >
            <hr
              ref={seekBar}
              className='h-1 border-none w-[0%] bg-green-500 rounded-full'
            />
          </div>

          {/* Total Time */}
          <p>
            {time?.totalTime?.minute || 0}:
            {String(time?.totalTime?.second || 0).padStart(2, '0')}
          </p>

        </div>

      </div>

      {/* Right */}
      <div className='hidden lg:flex items-center gap-2'>
        <img className='w-4' src={assets.volume_icon} alt="" />
      </div>

    </div>
  )
}

export default Player;
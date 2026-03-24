import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player.jsx";
import Display from "./components/Display";
import { PlayerContext } from "./components/PlayerContext.jsx";

const App = () => {

  const context = useContext(PlayerContext);

  if (!context) return null;

  return (
    <div className="h-screen bg-black">

      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>

      <Player />

    </div>
  );
};

export default App;

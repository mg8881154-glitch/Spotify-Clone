import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-center justify-between">

      {/* Left Section (Back / Forward) */}
      <div className="flex items-center gap-3">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="bg-black p-2 rounded-full cursor-pointer hover:bg-[#ffffff20]"
        >
          ◀
        </button>

        {/* Forward Button */}
        <button
          onClick={() => navigate(1)}
          className="bg-black p-2 rounded-full cursor-pointer hover:bg-[#ffffff20]"
        >
          ▶
        </button>
      </div>

      {/* Right Section (Tabs + User) */}
      <div className="flex items-center gap-3 font-semibold">

        <p className="bg-white text-black px-4 py-1 rounded-full cursor-pointer">
          All
        </p>

        <p className="bg-white/20 text-white px-4 py-1 rounded-full cursor-pointer">
          Music
        </p>

        <p className="bg-white/20 text-white px-4 py-1 rounded-full cursor-pointer">
          Podcasts
        </p>

        {/* User Tag */}
        <div className='flex items-center gap-2 bg-[#282828] px-3 py-1 rounded-full cursor-pointer hover:bg-[#3e3e3e]'>
          <div className='w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-black text-xs font-bold'>
            M
          </div>
          <p className='text-sm text-white'>Muskan Gupta</p>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
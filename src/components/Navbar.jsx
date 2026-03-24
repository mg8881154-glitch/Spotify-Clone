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

      {/* Right Section (Tabs) */}
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

      </div>
    </div>
  );
};

export default Navbar;
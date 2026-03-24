import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import Navbar from './Navbar'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();

  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";

  const bgColor = isAlbum ? albumsData[Number(albumId)].bgColor : "#121212";

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  }, [location]); // important dependency

  return (
    <div
      ref={displayRef}
      className='w-full m-2 px-6 pt-4 rounded text-white overflow-auto'
    >
      <Navbar />

      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display
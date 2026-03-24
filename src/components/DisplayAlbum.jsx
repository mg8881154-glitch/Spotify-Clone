import React from 'react'
// import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, songsData, assets } from '../assets/assets'

const DisplayAlbum = () => {

  const { id } = useParams()
  const albumData = albumsData[id]

  return (
    <>
      {/* <Navbar /> */}

      {/* Album Info */}
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        
        <img className='w-48 rounded' src={albumData.image} alt="" />

        <div className='flex flex-col'>
          <p>Playlist</p>

          <h2 className='text-5xl font-bold mb-4 md:text-7xl'>
            {albumData.name}
          </h2>

          <h4>{albumData.desc}</h4>

          <p className='mt-1 flex items-center gap-2 text-sm text-[#a7a7a7]'>
            <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
            <b className='text-white'>Spotify</b>
            <span>• 1,323,154 likes</span>
            <span>• <b>50 songs</b>,</span>
            <span>about 2 hr 30 min</span>
          </p>
        </div>
      </div>

      {/* Header Row */}
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="" />
      </div>

      <hr className='border-gray-700' />

      {/* Songs List */}
      {
        songsData.map((item, index) => (
          <div
            key={index}
            className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center hover:bg-[#ffffff10] rounded'
          >
            {/* Title + Image */}
            <p className='text-white flex items-center gap-3'>
              <b className='text-[#a7a7a7]'>{index + 1}</b>

              <img
                className='inline w-10'
                src={item.image}
                alt=""
              />

              {item.name}
            </p>

            {/* Album */}
            <p className='text-[15px]'>{albumData.name}</p>

            {/* Date */}
            <p className='text-[15px] hidden sm:block'>5 days ago</p>

            {/* Duration */}
            <p className='text-[15px] text-center'>
              {item.duration}
            </p>
          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum
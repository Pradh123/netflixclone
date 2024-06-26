import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12 absolute text-white'>
      <h1 className=' text-2xl font-bold'>{title}</h1>
      <p className=' py-4 text-lg w-1/3'>{overview}</p>
      <div>
        <button className=' mx-2 bg-gray-500 text-white p-2 px-6 text-xl bg-opacity-50 rounded-lg '>Play</button>
        <button className=' bg-gray-500 text-white p-2 px-6 text-xl bg-opacity-50 rounded-lg '>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
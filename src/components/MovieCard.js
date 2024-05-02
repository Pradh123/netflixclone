import React from 'react'
import { IMG_CDN } from '../utiles/Constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className=' w-48 pr-4'>
      <img alt='image'
      src={IMG_CDN+posterPath}
      />
    </div>
  )
}

export default MovieCard
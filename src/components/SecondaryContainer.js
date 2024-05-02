import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  return (
    <div className=' bg-black'>
      <div className=' -mt-40 pl-8 relative z-10'>
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovie}/>
      <MovieList title="Trandeing" movies={movies?.nowTrandingMovie}/>
      <MovieList title="Papular" movies={movies?.nowPapularMovie}/>
      <MovieList title="Upcomming" movies={movies?.nowUpcommingMovie}/>
      <MovieList title="Horror" movies={movies?.nowPlayingMovie}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
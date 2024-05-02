import React from 'react'
import Header from './Header'
import usePlayingMovie from '../Hooks/usePlayingMovie'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTrandingMovie from '../Hooks/useTrandingMovie';
import usePapularMovie from '../Hooks/usePapularMovie';
import useUpcommingMovie from '../Hooks/useUpcommingMovie';

const Browse = () => {
 usePlayingMovie();
 useTrandingMovie();
 usePapularMovie();
 useUpcommingMovie();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
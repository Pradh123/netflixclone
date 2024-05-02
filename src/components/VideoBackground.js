
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";
const VideoBackground = ({movieId}) => {
const Id=useSelector(store=>store.movies?.movieId);
 useMovieTrailer(movieId);

  return (
    <div className=" w-full"><iframe className=" w-full aspect-video" src={`https://www.youtube.com/embed/${Id?.key}?si=CUMA3L2B6R7pxozw&autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe></div>
  )
}

export default VideoBackground
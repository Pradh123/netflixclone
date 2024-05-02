import { useEffect } from "react";
import { API_Option } from "../utiles/Constant";
import { useDispatch } from "react-redux";
import { addMovieId } from "../utiles/moviSlice";

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    const getMoviesVideos=async ()=>{
        const data=await fetch(url, API_Option)
        const json= await data.json();
        // console.log(json.results)
        const trailerData=json.results?.filter(item=>item.type==="Trailer") ;
        const trailer=trailerData.length?trailerData[0]:json.results[0];
   dispatch(addMovieId(trailer))
    } 
    
    useEffect(()=>{
        getMoviesVideos();
    },[]) 
}
export default useMovieTrailer;
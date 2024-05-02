import { useDispatch } from "react-redux";
import { addMovie } from "../utiles/moviSlice";
import { useEffect } from "react";
import { API_Option } from "../utiles/Constant";

const usePlayingMovie=()=>{
    const dispatch=useDispatch()
    const nowPlayingMovi=async ()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_Option);
      const json=await data.json();
      dispatch(addMovie(json.results));
    }
    useEffect(()=>{
      nowPlayingMovi();
    },[])

}

export default usePlayingMovie;
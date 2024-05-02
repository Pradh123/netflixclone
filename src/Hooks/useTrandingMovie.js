import { useDispatch } from "react-redux";
import { addTrandingMovie } from "../utiles/moviSlice";
import { useEffect } from "react";
import { API_Option } from "../utiles/Constant";

const useTrandingMovie=()=>{
    const dispatch=useDispatch()
    const nowTrandingMovi=async ()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_Option);
      const json=await data.json();
      dispatch(addTrandingMovie(json.results));
    }
    useEffect(()=>{
      nowTrandingMovi();
    },[])

}

export default useTrandingMovie;
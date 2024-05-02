import { useDispatch } from "react-redux";
import {  addPapularMovie } from "../utiles/moviSlice";
import { useEffect } from "react";
import { API_Option } from "../utiles/Constant";

const usePapularMovie=()=>{
    const dispatch=useDispatch()
    const nowPapularMovi=async ()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_Option);
      const json=await data.json();
      dispatch(addPapularMovie(json.results));
    }
    useEffect(()=>{
      nowPapularMovi();
    },[])

}

export default usePapularMovie;
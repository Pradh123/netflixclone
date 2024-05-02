import { useDispatch } from "react-redux";
import {  addUpcommingMovie } from "../utiles/moviSlice";
import { useEffect } from "react";
import { API_Option } from "../utiles/Constant";

const useUpcommingMovie=()=>{
    const dispatch=useDispatch()
    const nowUpcommingMovi=async ()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_Option);
      const json=await data.json();
      dispatch(addUpcommingMovie(json.results));
    }
    useEffect(()=>{
      nowUpcommingMovi();
    },[])

}

export default useUpcommingMovie;
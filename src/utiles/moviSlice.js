import { createSlice } from "@reduxjs/toolkit";

const moviSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovie:null,
        movieId:null,
        nowPapularMovie:null,
        nowTrandingMovie:null,
        nowUpcommingMovie:null,
    },
    reducers:{
        addMovie:(state,action)=>{
            state.nowPlayingMovie=action.payload;
        },
        addPapularMovie:(state,action)=>{
            state.nowPapularMovie=action.payload;
        },
        addTrandingMovie:(state,action)=>{
            state.nowTrandingMovie=action.payload;
        },
         addUpcommingMovie:(state,action)=>{
            state.nowUpcommingMovie=action.payload;
        },
        addMovieId:(state,action)=>{
           state.movieId=action.payload;
        }
    }
})
export const {addMovie,addMovieId,addPapularMovie,addTrandingMovie,addUpcommingMovie}=moviSlice.actions;
 export const MovieReducer=moviSlice.reducer;
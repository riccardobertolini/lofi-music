
import {createSlice } from "@reduxjs/toolkit"; 
 

type InitialStateType = {
  playing:string[],
  
};
const initialState: InitialStateType = {
  playing:[],
 
};

export const appLofiMusicSlice = createSlice({
  name: "appLofiMusic",
  initialState,
  reducers: {
    handleTogglePlay:(state , action)=>{
      const src = action.payload ;
      const playing = state.playing ;
      if(playing.indexOf(src)==-1){
          playing.push(src);
      }
      else {
        playing.splice(playing.indexOf(src), 1);
    
      }
      state.playing=playing ;

    },
    handlestopAllTrigger:(state)=>{
      state.playing=[];
    }

  },
});

 
export const { handleTogglePlay,handlestopAllTrigger } =
  appLofiMusicSlice.actions;
export default appLofiMusicSlice.reducer;

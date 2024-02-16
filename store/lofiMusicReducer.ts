
import {createSlice } from "@reduxjs/toolkit"; 
 

type InitialStateType = {
  playing:string[],
  masterVolume:number ,
  
};
const initialState: InitialStateType = {
  playing:[],
  masterVolume:1,
 
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
    }, 
    handleMasterVolume:(state, action)=>{
      state.masterVolume=action.payload
    },
    handleSetMusic:(state, action)=>{
      state.playing=action.payload
    },

  },
});

 
export const { handleTogglePlay,handlestopAllTrigger,handleMasterVolume,handleSetMusic } =
  appLofiMusicSlice.actions;
export default appLofiMusicSlice.reducer;

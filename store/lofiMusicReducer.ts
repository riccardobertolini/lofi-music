
import {createSlice } from "@reduxjs/toolkit"; 
 

type InitialStateType = {
  
};
const initialState: InitialStateType = {
 
};

export const appLofiMusicSlice = createSlice({
  name: "appLofiMusic",
  initialState,
  reducers: {
    addMusic:(state , action)=>{

    }

  },
});

 
export const { addMusic } =
  appLofiMusicSlice.actions;
export default appLofiMusicSlice.reducer;

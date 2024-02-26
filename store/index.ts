import { configureStore } from '@reduxjs/toolkit'
import lofiMusic from './lofiMusicReducer'

export const store = configureStore({
  reducer: { lofiMusic },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

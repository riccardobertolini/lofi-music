import React, { useState, useEffect } from 'react'
import { TilesContainer } from './App.style'
import { TilePlayer } from './TilePlayer'
import ActiveSounds from './ActiveSounds'
import {  RootState } from "../store";
import { useSelector } from "react-redux";

interface MusicTilesProp {
  musicList: Music[]
  randomTracks: number[]
  setRandomTracks: (value: number[]) => void
}

type Music = {
  src: string
  imageSrc: string
}

const MusicTiles = ({ musicList, randomTracks, setRandomTracks}: MusicTilesProp) => {
  
  const [stopAllTrigger, doStopAllTrigger] = useState(0)

  const [masterVolume, setMasterVolume] = useState(1);
  const store = useSelector((state: RootState) => state.lofiMusic)



  const incrementActiveSounds = (playing: boolean) => {
  
  }

  const stopAll = () => {
    doStopAllTrigger((prevStopAllTrigger) => prevStopAllTrigger + 1)
    setRandomTracks([])
    setMinutes(0)
    setTimer(0)
  }
 
   

  return (
    <div>
      <ActiveSounds
        stopAll={stopAll}
        setMasterVolume={setMasterVolume} activeSounds={store.playing.length}      />
      <TilesContainer>
        {musicList.map((music: Music, index: number) => (
          <TilePlayer
            imageSrc={music.imageSrc}
            src={music.src}
            key={music.src}
            incrementActiveSounds={incrementActiveSounds}
            stopAllTrigger={stopAllTrigger}
            isPlaying={randomTracks.includes(index)}
            masterVolume={masterVolume}
          />
        ))}
      </TilesContainer>
    </div>
  )
}

export default MusicTiles

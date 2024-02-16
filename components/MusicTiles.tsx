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
  
  const [masterVolume, setMasterVolume] = useState(1);
  const store = useSelector((state: RootState) => state.lofiMusic)



  const incrementActiveSounds = (playing: boolean) => {
  
  }

 
 
   

  return (
    <div>
      <ActiveSounds
        setMasterVolume={setMasterVolume} activeSounds={store.playing.length}      />
      <TilesContainer>
        {musicList.map((music: Music, index: number) => (
          <TilePlayer
            imageSrc={music.imageSrc}
            src={music.src}
            key={music.src}
            incrementActiveSounds={incrementActiveSounds}
            isPlaying={randomTracks.includes(index)}
            masterVolume={masterVolume}
          />
        ))}
      </TilesContainer>
    </div>
  )
}

export default MusicTiles

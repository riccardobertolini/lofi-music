import React, { useState, useEffect } from 'react'
import { TilesContainer } from './App.style'
import { TilePlayer } from './TilePlayer'
import ActiveSounds from './ActiveSounds'

interface MusicTilesProp {
  musicList: Music[]
  randomTracks: number[]
}

type Music = {
  src: string
  imageSrc: string
}

const MusicTiles = ({ musicList, randomTracks }: MusicTilesProp) => {
  const [activeSounds, setActiveSounds] = useState(0)
  const [stopAllTrigger, doStopAllTrigger] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [timer, setTimer] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [masterVolume, setMasterVolume] = useState(1);

  useEffect(() => {
    if (activeSounds > 0 && !isTimerRunning) {
      setIsTimerRunning(true)
      setTimer(0)
    } else if (activeSounds === 0 && isTimerRunning) {
      setIsTimerRunning(false)
    }
  }, [activeSounds, isTimerRunning])

  useEffect(() => {
    let interval: NodeJS.Timer
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1)
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isTimerRunning])

  const incrementActiveSounds = (playing: boolean) => {
    if (playing) {
      setActiveSounds((prevActiveSounds) => prevActiveSounds + 1)
    } else {
      setActiveSounds((prevActiveSounds) => prevActiveSounds - 1)
    }
  }

  const stopAll = () => {
    doStopAllTrigger((prevStopAllTrigger) => prevStopAllTrigger + 1)
    //setActiveSounds(0)
    setMinutes(0)
    setTimer(0)
  }
  if (timer == 60) {
    setMinutes(minutes + 1)
    setTimer(0)
  }
  useEffect(() => {
    setActiveSounds(0)
  }, [])

  return (
    <div>
      <ActiveSounds
        minutes={minutes}
        timer={timer}
        activeSounds={activeSounds}
        stopAll={stopAll}
        setMasterVolume={setMasterVolume}
      />
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

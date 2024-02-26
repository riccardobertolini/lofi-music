import React, { useRef, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import {
  AudioPlayer,
  ImageContainer,
  Controls,
  SliderContainer,
  StyledSlider,
  VolumeIcon,
} from './TilePlayer.style'
import { ReactPlayerProps } from 'react-player'
import { useAccessibilityContext } from '../contexts/AccessibilityContext'
import './ActiveSounds'

import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { handleTogglePlay } from '../store/lofiMusicReducer'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

interface TilePlayerProps {
  src: string
  imageSrc: string
  isPlaying: boolean
  masterVolume: number
}

interface ProgressState {
  played: number
  playedSeconds: number
  loaded: number
  loadedSeconds: number
}

export const TilePlayer = ({
  src,
  imageSrc,
  isPlaying,
  masterVolume,
}: TilePlayerProps) => {
  const [volume, setVolume] = useState(1)
  const [progress, setProgress] = useState(0)
  const { tabIndex } = useAccessibilityContext()
  const playerRef = useRef<ReactPlayerProps>(null)

  const dispatch = useDispatch<AppDispatch>()

  const togglePlay = () => {
    dispatch(handleTogglePlay(src))
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
  }

  const handleProgress = (state: ProgressState) => {
    const { played } = state
    setProgress(played)
  }

  const handleSeek = (value: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(value)
    }
  }

  return (
    <AudioPlayer>
      <ImageContainer
        $status={isPlaying}
        onClick={togglePlay}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key == ' ' || e.key == 'Return' || e.key == 'Enter') {
            togglePlay()
          }
        }}
        data-testid="togglePlayButton"
        tabIndex={tabIndex}
      >
        <Image width={300} height={300} src={imageSrc} alt="" />
        <ReactPlayer
          ref={playerRef}
          url={src}
          playing={isPlaying}
          loop
          volume={volume * masterVolume}
          width={0}
          height={0}
          data-testid="reactPlayer"
          onProgress={handleProgress}
        />
      </ImageContainer>
      <SliderContainer>
        <StyledSlider
          min={0}
          max={1}
          data-testid="sliderInput"
          step={0.01}
          value={progress}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSeek(parseFloat(e.target.value))
          }
        />
      </SliderContainer>
      <Controls>
        <VolumeIcon />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          data-testid="effectiveSliderInput"
          value={volume}
          onChange={handleVolumeChange}
          tabIndex={tabIndex}
        />
      </Controls>
    </AudioPlayer>
  )
}

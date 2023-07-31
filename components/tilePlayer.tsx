import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import {
  AudioPlayer,
  ImageContainer,
  Controls,
  SliderContainer,
  StyledSlider,
  VolumeIcon,
} from './tilePlayer.style'
import { ReactPlayerProps } from 'react-player'
import { useAccessibilityContext } from '../contexts/AccessibilityContext'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

interface TilePlayerProps {
  src: string
  imageSrc: string
  incrementActiveSounds: (value: boolean) => void
  stopAllTrigger: number
  isPlaying: boolean
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
  incrementActiveSounds,
  stopAllTrigger,
  isPlaying,
}: TilePlayerProps) => {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [progress, setProgress] = useState(0)
  const { tabIndex } = useAccessibilityContext()
  const playerRef = useRef<ReactPlayerProps>(null)

  useEffect(() => {
    setPlaying(false)
  }, [stopAllTrigger])

  useEffect(() => {
    isPlaying ? setPlaying(true) : setPlaying(false)
  }, [isPlaying])

  useEffect(() => {
    incrementActiveSounds(playing)
  }, [playing])

  const togglePlay = () => {
    setPlaying((prevPlaying) => !prevPlaying)
    // incrementActiveSounds(!playing)
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
        $status={playing}
        onClick={togglePlay}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key == ' ' || e.key == 'Return' || e.key == 'Enter') {
            togglePlay()
          }
        }}
        tabIndex={tabIndex}
      >
        <Image width={300} height={300} src={imageSrc} alt="" />
        <ReactPlayer
          ref={playerRef}
          url={src}
          playing={playing}
          loop
          volume={volume}
          width={0}
          height={0}
          onProgress={handleProgress}
        />
      </ImageContainer>
      <SliderContainer>
        <StyledSlider
          min={0}
          max={1}
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
          value={volume}
          onChange={handleVolumeChange}
          tabIndex={tabIndex}
        />
      </Controls>
    </AudioPlayer>
  )
}

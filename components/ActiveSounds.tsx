import React, { FC, MouseEvent, useEffect, useState } from 'react'
import { useAccessibilityContext } from '../contexts/AccessibilityContext'
import {
  ControlBar,
  TimerText,
  SoundsActiveText,
  StopAllButton,
  VolumeIcon,
  VolumeControl,
  ControllerWrapper,
} from './ActiveSounds.style'

interface ActiveSoundsProps {
  activeSounds: number
  stopAll: (event: MouseEvent<HTMLButtonElement>) => void
  setMasterVolume: Function
}

const ActiveSounds: FC<ActiveSoundsProps> = ({
  activeSounds,
  stopAll,
  setMasterVolume,
}) => {
  let displayValue = activeSounds ? 'block' : 'none'
  const { tabIndex } = useAccessibilityContext()

  const handleMasterVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMasterVolume = parseFloat(e.target.value)
    setMasterVolume(newMasterVolume)
  }

  const [timer, setTimer] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)

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



  if (timer == 60) {
    setMinutes(minutes + 1)
    setTimer(0)
  }


  return (
    <ControlBar style={{ display: displayValue }}>
      <ControllerWrapper>
        <TimerText>
          <span data-testid="minutes-text">
            {minutes < 10 ? `0${minutes}` : minutes}
          </span>
          :
          <span data-testid="seconds-text">
            {timer < 10 ? `0${timer}` : timer}
          </span>
        </TimerText>
        <SoundsActiveText>Sounds active: {activeSounds}</SoundsActiveText>
        <StopAllButton onClick={stopAll} tabIndex={tabIndex}>
          Stop all
        </StopAllButton>
      </ControllerWrapper>
      <ControllerWrapper style={{justifyContent: "center"}}>
        <VolumeControl>
            <VolumeIcon />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              onChange={handleMasterVolumeChange}
              tabIndex={tabIndex}
            />
          </VolumeControl>
        </ControllerWrapper>
    </ControlBar>
  )
}

export default ActiveSounds

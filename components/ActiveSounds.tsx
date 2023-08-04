import React, { FC, MouseEvent } from 'react'
import { useAccessibilityContext } from '../contexts/AccessibilityContext'
import {
  ControlBar,
  TimerText,
  SoundsActiveText,
  StopAllButton,
  VolumeIcon,
  VolumeControl,
  Row,
} from './ActiveSounds.style'

interface ActiveSoundsProps {
  timer: number
  minutes: number
  activeSounds: number
  stopAll: (event: MouseEvent<HTMLButtonElement>) => void
  setMasterVolume: Function
}

const ActiveSounds: FC<ActiveSoundsProps> = ({
  timer,
  minutes,
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

  return (
    <ControlBar style={{ display: displayValue }}>
      <Row>
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
      </Row>
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
    </ControlBar>
  )
}

export default ActiveSounds

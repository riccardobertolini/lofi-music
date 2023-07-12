import React from 'react'
import { Subheading } from './App.style'

const ActiveSounds = ({ activeSounds, stopAll }) => {
  if (activeSounds)
    return (
      <Subheading style={{ transition: 'opacity 0.3s ease' }}>
        Sounds active: {activeSounds} <br /> <a onClick={stopAll}>Stop all</a>
      </Subheading>
    )
  else
    return (
      <Subheading style={{ opacity: '0', transition: 'opacity 0.3s ease' }}>
        Sounds active: {activeSounds} <br /> <a onClick={stopAll}>Stop all</a>
      </Subheading>
    )
}

export default ActiveSounds

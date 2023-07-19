import React from 'react'
import { Subheading } from './App.style'

const ActiveSounds = ({ timer, minutes, activeSounds, stopAll }) => {
  if (activeSounds)
    return (
      <>
        <Subheading style={{ transition: 'opacity 0.3s ease' }}>
          <p style={{ color: '#ff1361' }}>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {timer < 10 ? `0${timer}` : timer}
          </p>
          Sounds active: {activeSounds} <br /> <a onClick={stopAll}>Stop all</a>
        </Subheading>
      </>
    )
  else
    return (
      <Subheading
        style={{
          opacity: '0',
          transition: 'opacity 0.3s ease',
          cursor: 'default',
        }}
      >
        Sounds active: {activeSounds} <br /> <a onClick={stopAll}>Stop all</a>
      </Subheading>
    )
}

export default ActiveSounds

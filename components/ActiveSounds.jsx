import React from 'react'
import { Subheading } from './App.style'

const ActiveSounds = ({ timer, minutes, activeSounds, stopAll }) => {
  let opacityCount = activeSounds ? 1 : 0;
  
  let cursor = activeSounds ? 'pointer' : 'default';

    return (
      <>
        <Subheading style={{ transition: 'opacity 0.3s ease', opacity: opacityCount, cursor: cursor  }}>
          <p style={{ color: '#ff1361',

}}>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {timer < 10 ? `0${timer}` : timer}
          </p>
          Sounds active: {activeSounds} <br /> <a onClick={stopAll}>Stop all</a>
        </Subheading>
      </>
    )
}

export default ActiveSounds

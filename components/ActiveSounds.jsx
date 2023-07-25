import React from 'react'
import { Subheading } from './App.style'

const ActiveSounds = ({ timer, minutes, activeSounds, stopAll }) => {

  let opacityValue = activeSounds ? 1 : 0;

  let cursorStyle = activeSounds ? 'pointer' : 'default';

  let linkStyle = activeSounds ? {} : {pointerEvents: 'none', userSelect: 'false' };
  
    return (
      <>
        <Subheading style={{ transition: 'opacity 0.3s ease', opacity: opacityValue, cursor: cursorStyle  }}>
          <p style={{ color: '#ff1361'}}>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {timer < 10 ? `0${timer}` : timer}
          </p>
          Sounds active: {activeSounds} <br /> <a style={linkStyle} onClick={stopAll}>Stop all</a>
        </Subheading>
      </>
    )
}

export default ActiveSounds

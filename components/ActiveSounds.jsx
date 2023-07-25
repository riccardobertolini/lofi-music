import React from 'react'
import { Subheading } from './App.style'

const ActiveSounds = ({ timer, minutes, activeSounds, stopAll }) => {

  let opacityValue = activeSounds ? 1 : 0;

  let linkStyle = activeSounds ? {} : {pointerEvents: 'none', userSelect: 'false', cursorStyle: 'pointer' };
  
    return (
      <>
        <Subheading style={{ transition: 'opacity 0.3s ease', opacity: opacityValue, cursor: 'default'  }}>
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

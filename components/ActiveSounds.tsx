import React, { FC, CSSProperties, MouseEvent } from 'react';
import { Subheading } from './App.style';
import { useAccessibilityContext } from '../contexts/AccessibilityContext'

interface ActiveSoundsProps {
    timer: number;
    minutes: number;
    activeSounds: number;
    stopAll: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const ActiveSounds: FC<ActiveSoundsProps> = ({ timer, minutes, activeSounds, stopAll }) => {
    let opacity = activeSounds ? 1 : 0;
    let linkStyle: CSSProperties = activeSounds ? {} : {pointerEvents: 'none', userSelect: 'none', cursor: 'pointer' };
    const {tabIndex} =useAccessibilityContext()

    return (
        <div style={{ position:'fixed', bottom:20,left:'50%',transform: 'translateX(-50%)', zIndex:10,width:'100%', textAlign:'center' }}>
            <Subheading style={{ opacity }}>
                <p style={{ color: '#ff1361',margin:0,flex:'none'}}>
                    {minutes < 10 ? `0${minutes}` : minutes}:
                    {timer < 10 ? `0${timer}` : timer}
                </p>
                <span style={{fontSize:'14px',flex:'none'}}>
                    Sounds active: {activeSounds} 
                </span>
                 <a style={linkStyle} onClick={stopAll} tabIndex={tabIndex}>Stop all</a>
            </Subheading>
        </div>
    )
}

export default ActiveSounds;

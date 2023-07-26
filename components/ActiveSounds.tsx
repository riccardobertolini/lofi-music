import React, { FC, CSSProperties, MouseEvent } from 'react';
import { Subheading } from './App.style';

interface ActiveSoundsProps {
    timer: number;
    minutes: number;
    activeSounds: number;
    stopAll: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const ActiveSounds: FC<ActiveSoundsProps> = ({ timer, minutes, activeSounds, stopAll }) => {

    let opacityValue = activeSounds ? 1 : 0;

    let linkStyle: CSSProperties = activeSounds ? {} : {pointerEvents: 'none', userSelect: 'none', cursor: 'pointer' };

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

export default ActiveSounds;

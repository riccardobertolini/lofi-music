import styled from 'styled-components'
export const VOLUME_IMAGE = '/img/volume.svg'

const font = 'Ubuntu, sans-serif'
const fontSize = '16px'

export const ControlBar = styled.div`
  transition: opacity 0.3s ease;
  cursor: default;
  position: fixed;
  z-index: 9999;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`

export const ControllerWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.47fr 1fr 0.57fr;
  grid-template-rows: repeat(2, auto);
  grid-gap: 4px;
`

export const TimerText = styled.div`
  color: rgba(255, 5, 100, 1);
  font-family: ${font};
  font-size: ${fontSize};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SoundsActiveText = styled.div`
  color: white;
  font-family: ${font};
  font-size: ${fontSize};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StopAllButton = styled.button`
  background-color: rgba(173, 0, 255, 0.43);
  color: #fff;
  font-family: ${font};
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff69b4;
  }
`

export const VolumeIcon = styled.span`
  background-image: url(${VOLUME_IMAGE});
  width: 20px;
  height: 20px;
  display: block;
  margin-left: auto;
  content: '';
  background-size: cover;
  background-repeat: no-repeat;
`

export const VolumeControl = styled.div`
  display: flex;
  align-items: center;
`

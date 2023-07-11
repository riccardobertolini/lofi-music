import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { AudioPlayer, ImageContainer, Controls ,SliderContainer,StyledSlider} from './tilePlayer.style';

interface TilePlayerProps {
  src: string;
  imageSrc: string;
}

export const TilePlayer = ({ src, imageSrc }: TilePlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);

  const playerRef = useRef<ReactPlayer>(null);

  const togglePlay = () => {
    setPlaying((prevPlaying) => !prevPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const handleProgress = (state) => {
    const { played } = state;
    setProgress(played);
  };

  const handleSeek = (value) => {
    if (playerRef.current) {
      playerRef.current.seekTo(value);
    }
  };

  return (
    <AudioPlayer>
      <ImageContainer status={playing} onClick={togglePlay}>
        <img src={imageSrc} alt="" />
        <ReactPlayer
          ref={playerRef}
          url={src}
          playing={playing}
          loop
          volume={volume}
          width={0}
          height={0}
          onProgress={handleProgress}
        />
      </ImageContainer>
	  	<SliderContainer>
	     <StyledSlider
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={progress}
          onChange={(e) => handleSeek(parseFloat(e.target.value))}
        />
		</SliderContainer>
		<Controls>
        <span>🔊</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
        />
      </Controls>
    </AudioPlayer>
  );
};

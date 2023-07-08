import { AudioHTMLAttributes, useRef, useState } from 'react';
import { AudioPlayer, ImageContainer, Controls } from './tilePlayer.style';
import ReactPlayer from 'react-player';

interface TilePlayerProps {
	src: string;
	imageSrc: string;
}

export const TilePlayer = ({ src, imageSrc }: TilePlayerProps) => {
	const [playing, setPlaying] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);
	const [volume, setVolume] = useState(1);

	const togglePlay = () => {
		if (audioRef.current) {
			if (playing) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
		}
		setPlaying(!playing);
	};

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const audioElement = audioRef.current;
		if (audioElement) {
			setVolume(parseFloat(e.target.value));
			audioElement.volume = parseFloat(e.target.value);
		}
	};

	return (
		<AudioPlayer>
			<ImageContainer status={playing} onClick={togglePlay}>
				<img src={imageSrc} alt="" />
				<ReactPlayer ref={audioRef} src={src} loop />
				{/* <audio ref={audioRef} src={src} loop /> */}
			</ImageContainer>
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

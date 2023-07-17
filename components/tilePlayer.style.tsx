import styled from 'styled-components';

export const PAUSE_IMAGE = '/img/pause.svg';
export const VOLUME_IMAGE = '/img/volume.svg';

interface ImageContainerProps {
	readonly $status: boolean;
}

export const AudioPlayer = styled.div`
	width: 300px;
	height: 380px;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
	width: 300px;
	height: 300px;
	overflow: hidden;
	border-radius: 10%;
	position: relative;
	z-index: 2;

	&::after {
		display: block;
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 70px;
		color: white;
		-webkit-filter: drop-shadow(10px 10px 10px #ffffff);
		filter: drop-shadow(10px 10px 10px #ffffff);
		top: 50%;
		left: 50%;

		width: 50px;
		height: 50px;
		content: '';
		background-size: cover;
		z-index: 1;
		background-image: url(${(props) => (props.$status ? PAUSE_IMAGE : '/img/play.svg')});
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: 0.5s;
		position: relative;
		z-index: 0;
		filter: ${(props) => (props.$status ? 'grayscale(1)' : 'none')};
		transform: ${(props) => (props.$status ? 'scale(1.1)' : 'none')};
	}
`;


export const Controls = styled.div`
	padding: 20px 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SliderContainer = styled.div`
	width: 90%;
	margin: 10px auto 0 auto;
	padding: 10px 5px;
	//display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5f5f5;
	border-radius: 5px;
	color: #888;
	display:none
`;

export const StyledSlider = styled.input.attrs({
	type: 'range',
  })`
	width: 100%;
	height: 5px;
	background: linear-gradient(to right, #44107a ${(props) => (props.value !== undefined ? (+props?.value * 100).toString() : '0')}%, #ff1361 ${(props) => (props.value !== undefined ? (+props?.value * 100).toString() : '0')}%);
	border-radius: 5px;
	appearance: none;
	outline: none;
	opacity: 0.7;
	transition: opacity 0.2s;
	cursor: pointer;
  
	&::-webkit-slider-thumb {
	  appearance: none;
	  width: 12px;
	  height: 12px;
	  background-color: #888;
	  border-radius: 50%;
	  cursor: pointer;
	}
  
	&::-moz-range-thumb {
	  width: 12px;
	  height: 12px;
	  background-color: #888;
	  border-radius: 50%;
	  cursor: pointer;
	}
  `;
  
export const VolumeIcon = styled.span`
background-image: url(${VOLUME_IMAGE});
width: 10px;
height: 10px;
display: block;
content: '';
background-size: cover;
background-repeat: no-repeat;
margin-right: 10px;
`;

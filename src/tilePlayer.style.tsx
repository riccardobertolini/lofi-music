import styled, { css } from 'styled-components';

interface ImageContainerProps {
	readonly status: boolean;
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
	${(props) => props.status && playingTile}

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
		z-index: 1;
		${(props) =>
			props.status
				? 'content: url(/img/pause.svg); zoom:20%'
				: 'content: url(/img/play.svg); zoom:20%'};
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: 0.5s;
		position: relative;
		z-index: 0;
	}
`;

const playingTile = css`
	img {
		filter: grayscale(1);
		transform: scale(1.1);
	}

	${ImageContainer}::after {
		display: block;
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 70px;
		top: 50%;
		left: 50%;
		z-index: -1;
		content: '⏹';
	}
`;

export const Controls = styled.div`
	padding: 20px 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

import { TilePlayer } from './tilePlayer.tsx';
import { Footer, TilesContainer, Title } from './App.style';
import './App.css';

function App() {
	return (
		<div className="App">
			<Title>
				Create your working <div>sounds</div>
			</Title>
			<TilesContainer>
				<TilePlayer
					imageSrc={'/img/lofi.jpg'}
					src={'/audio/empty-mind-118973.mp3'}
				/>
				<TilePlayer
					imageSrc={'/img/forest.jpg'}
					src={'/audio/forest_sounds.mp3'}
				/>
				<TilePlayer imageSrc={'/img/relax.jpg'} src={'/audio/relaxing.mp3'} />
				<TilePlayer imageSrc={'/img/cat.jpg'} src={'/audio/cat.mp3'} />
				<TilePlayer imageSrc={'/img/rain.jpg'} src={'/audio/rain.mp3'} />
				<TilePlayer imageSrc={'/img/sea.jpg'} src={'/audio/sea.mp3'} />
			</TilesContainer>
			<Footer>
				<a href="https://www.github.com/riccardobertolini">
					👨‍💻 by Riccardo Bertolini with 💖
				</a>{' '}
				<br />
				using React18, TypeScript & Vite
			</Footer>
		</div>
	);
}

export default App;

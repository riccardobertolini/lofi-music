import { TilePlayer } from './tilePlayer.tsx';
import { Footer, TilesContainer, Title } from './App.style';
import SettingModal from './SettingModal.jsx';
import './App.css';

function App() {
	return (
		<div className="App">
			<SettingModal />
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
				<TilePlayer imageSrc={'/img/Thunder.jpg'} src={'/audio/thunder.mp3'} />
				<TilePlayer
					imageSrc={'/img/city.jpg'}
					src={'/audio/relaxed-city.mp3'}
				/>
				<TilePlayer
					imageSrc={'/img/zen_bells.jpg'}
					src={'/audio/zen_bells.mp3'}
				/>
			</TilesContainer>
			<Footer>
				<a href="https://github.com/riccardobertolini/lofi-music">
					Open Source project 💖 feel free to contribute
				</a>{' '}
				<br />
				using React18, TypeScript & Vite
			</Footer>
		</div>
	);
}

export default App;

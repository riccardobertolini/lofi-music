import { TilePlayer } from './tilePlayer.tsx';
import { Footer, TilesContainer, Title } from './App.style';
import SettingModal from './SettingModal.jsx';
import './App.css';
import MusicTiles from './components/MusicTiles.jsx';

function App() {
	return (
		<div className="App">
			<SettingModal />
			<Title>
				Create your working <div>sounds</div>
			</Title>
			<MusicTiles />
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

// import { TilePlayer } from './tilePlayer.tsx';
import { Footer, Title } from './App.style';
import './App.css';
import MusicTiles from './components/MusicTiles.jsx';

function App() {
	return (
		<div className="App">
			<Title>
				Create your working <div>sounds</div>
			</Title>
			<MusicTiles />
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

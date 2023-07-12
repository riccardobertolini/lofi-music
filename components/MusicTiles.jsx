import { TilesContainer } from "./App.style";
import { TilePlayer } from "./tilePlayer";

const MusicTiles = ({ musicList, randomTracks }) => {
  return (
    <div>
      <TilesContainer>
        {musicList.map((music, index) =>
          <TilePlayer
            imageSrc={music.imageSrc}
            src={music.src}
            key={music.src}
            isPlaying={randomTracks.includes(index)}
          />
        )}
      </TilesContainer>
    </div>
  );
};

export default MusicTiles;

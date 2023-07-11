import { TilesContainer } from "./App.style";
import { TilePlayer } from "./tilePlayer";

const musicList = [
  {
    imageSrc: "/img/lofi.jpg",
    src: "/audio/empty-mind-118973.mp3",
  },
  {
    imageSrc: "/img/forest.jpg",
    src: "/audio/forest_sounds.mp3",
  },
  {
    imageSrc: "/img/relax.jpg",
    src: "/audio/relaxing.mp3",
  },
  {
    imageSrc: "/img/cat.jpg",
    src: "/audio/cat.mp3",
  },
  {
    imageSrc: "/img/rain.jpg",
    src: "/audio/rain.mp3",
  },
  {
    imageSrc: "/img/sea.jpg",
    src: "/audio/sea.mp3",
  },
  {
    imageSrc: "/img/Thunder.jpg",
    src: "/audio/thunder.mp3",
  },
  {
    imageSrc: "/img/city.jpg",
    src: "/audio/relaxed-city.mp3",
  },
  {
    imageSrc: "/img/zen_bells.jpg",
    src: "/audio/zen_bells.mp3",
  },
  {
    imageSrc: "/img/meadow.jpg",
    src: "/audio/meadow.mp3",
  },
  {
    imageSrc: "/img/desert.jpg",
    src: "/audio/desert.mp3",
  },
  {
    imageSrc: "/img/mountain.jpg",
    src: "/audio/mountain.mp3",
  },
];

const MusicTiles = () => {
  return (
    <div>
      <TilesContainer>
        {musicList.map((music) => (
          <TilePlayer
            imageSrc={music.imageSrc}
            src={music.src}
            key={music.src}
          />
        ))}
      </TilesContainer>
    </div>
  );
};

export default MusicTiles;

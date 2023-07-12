import { useState } from 'react';
import { Header, Footer, Title } from '@/components/App.style'
import MusicTiles from '@/components/MusicTiles'
import SettingModal from '@/components/SettingModal'
import FullScreenMode from '@/components/FullScreenMode'
import Shuffler from "@/components/Shuffler";

export default function Home() {
  const [randomTracks, setRandomTracks] = useState([]);

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

  return (
      <div>
        <Header>
          <FullScreenMode />
          <Shuffler setRandomTracks={setRandomTracks} totalTracks={musicList.length} />
          <SettingModal />
        </Header>
        <Title>
          Create your working <div>sounds</div>
        </Title>
        <MusicTiles musicList={musicList} randomTracks={randomTracks} />
        <Footer>
          <a href="https://github.com/riccardobertolini/lofi-music">
            Open Source project 💖 feel free to contribute
          </a>{' '}
          <br />
          using React18, TypeScript & Vite
        </Footer>
      </div>
  )
}

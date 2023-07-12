import { useState } from 'react'

import { TilesContainer } from './App.style'
import { TilePlayer } from './tilePlayer'
import ActiveSounds from './ActiveSounds'

const musicList = [
  {
    imageSrc: '/img/lofi.jpg',
    src: '/audio/empty-mind-118973.mp3',
  },
  {
    imageSrc: '/img/forest.jpg',
    src: '/audio/forest_sounds.mp3',
  },
  {
    imageSrc: '/img/relax.jpg',
    src: '/audio/relaxing.mp3',
  },
  {
    imageSrc: '/img/cat.jpg',
    src: '/audio/cat.mp3',
  },
  {
    imageSrc: '/img/rain.jpg',
    src: '/audio/rain.mp3',
  },
  {
    imageSrc: '/img/sea.jpg',
    src: '/audio/sea.mp3',
  },
  {
    imageSrc: '/img/Thunder.jpg',
    src: '/audio/thunder.mp3',
  },
  {
    imageSrc: '/img/city.jpg',
    src: '/audio/relaxed-city.mp3',
  },
  {
    imageSrc: '/img/zen_bells.jpg',
    src: '/audio/zen_bells.mp3',
  },
  {
    imageSrc: '/img/meadow.jpg',
    src: '/audio/meadow.mp3',
  },
  {
    imageSrc: '/img/desert.jpg',
    src: '/audio/desert.mp3',
  },
  {
    imageSrc: '/img/mountain.jpg',
    src: '/audio/mountain.mp3',
  },
]

const MusicTiles = () => {
  const [activeSounds, setActiveSounds] = useState(0)
  const [stopAllTrigger, doStopAllTrigger] = useState(0)

  const incrementActiveSounds = (playing) => {
    if (playing) {
      setActiveSounds(activeSounds + 1)
    } else setActiveSounds(activeSounds - 1)
  }

  const stopAll = () => {
    doStopAllTrigger(stopAllTrigger + 1)
    setActiveSounds(0)
  }

  return (
    <div>
      <ActiveSounds activeSounds={activeSounds} stopAll={stopAll} />
      <TilesContainer>
        {musicList.map((music) => (
          <TilePlayer
            imageSrc={music.imageSrc}
            src={music.src}
            key={music.src}
            incrementActiveSounds={incrementActiveSounds}
            stopAllTrigger={stopAllTrigger}
          />
        ))}
      </TilesContainer>
    </div>
  )
}

export default MusicTiles

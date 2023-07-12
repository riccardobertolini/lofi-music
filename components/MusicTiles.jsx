import { useState } from 'react'

import { TilesContainer } from './App.style'
import { TilePlayer } from './tilePlayer'
import ActiveSounds from './ActiveSounds'

const MusicTiles = ({ musicList, randomTracks }) => {
  
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
        {musicList.map((music, index) =>
          <TilePlayer
            imageSrc={music.imageSrc}
            src={music.src}
            key={music.src}
            incrementActiveSounds={incrementActiveSounds}
            stopAllTrigger={stopAllTrigger}
            isPlaying={randomTracks.includes(index)}
          />
        )}
      </TilesContainer>
    </div>
  )
}

export default MusicTiles

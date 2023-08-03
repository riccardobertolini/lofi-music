import { useState } from 'react'
import { Header, Footer, Title } from '@/components/App.style'
import MusicTiles from '@/components/MusicTiles'
import SettingModal from '@/components/SettingModal'
import FullScreenMode from '@/components/FullScreenMode'
import Shuffler from '@/components/Shuffler'
import PrefetchImages from '@/components/PrefetchImages'
import { musicList } from '@/data/musicList'

import { useAccessibilityContext } from '@/contexts/AccessibilityContext'

export default function Home() {
  const [randomTracks, setRandomTracks] = useState([])
  const { tabIndex } = useAccessibilityContext()

  return (
    <div className="mainWrapper">
      <PrefetchImages />
      <Header>
        <FullScreenMode />
        <Shuffler
          setRandomTracks={setRandomTracks}
          totalTracks={musicList.length}
        />
        <SettingModal />
      </Header>
      <Title>
        Create your working{' '}
        <div>
          <span>sounds</span>
        </div>
      </Title>

      <MusicTiles musicList={musicList} randomTracks={randomTracks} />
      <Footer>
        <a
          href="https://github.com/riccardobertolini/lofi-music"
          tabIndex={tabIndex}
        >
          Open Source project 💖 feel free to contribute
        </a>{' '}
        <br />
        using React18, TypeScript & Vite
      </Footer>
    </div>
  )
}

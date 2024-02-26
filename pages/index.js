import { useState } from 'react'
import { Header, Footer, Title } from '@/components/App.style'
import MusicTiles from '@/components/MusicTiles'
import SettingModal from '@/components/SettingModal'
import MoodModal from '@/components/MoodModal'
import FullScreenMode from '@/components/FullScreenMode'
import Shuffler from '@/components/Shuffler'
import PrefetchImages from '@/components/PrefetchImages'
import { musicList } from '@/data/musicList'

import { useAccessibilityContext } from '@/contexts/AccessibilityContext'
import { Provider } from 'react-redux'
import { store } from '../store'
export default function Home() {
  const [randomTracks, setRandomTracks] = useState([])
  const { tabIndex } = useAccessibilityContext()

  return (
    <Provider store={store}>
      <div className="mainWrapper">
        <PrefetchImages />
        <Header>
          <FullScreenMode />
          <Shuffler totalTracks={musicList.length} />
          <SettingModal />
          <MoodModal />
        </Header>
        <Title>
          Create your working{' '}
          <div>
            <span>sounds</span>
          </div>
        </Title>

        <MusicTiles musicList={musicList} />
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
    </Provider>
  )
}

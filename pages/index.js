import { useState } from 'react'
import { Header, Footer, Title } from '@/components/App.style'
import MusicTiles from '@/components/MusicTiles'
import SettingModal from '@/components/SettingModal'
import FullScreenMode from '@/components/FullScreenMode'
import Shuffler from '@/components/Shuffler'
import CalendarDate from '../components/CalendarDate'
import PrefetchImages from '@/components/PrefetchImages'
import {musicList} from '@/data/musicList'

export default function Home() {
  const [randomTracks, setRandomTracks] = useState([])
  const [isDatePickerOpen, setDatePickerOpen] = useState(false)

  const handleClose = () => {
    if (isDatePickerOpen) {
      setDatePickerOpen(!isDatePickerOpen)
    }
  }

  return (
    <div onClick={handleClose}
    >
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
        Create your working <div>sounds</div>
      </Title>

      <CalendarDate isDatePickerOpen={isDatePickerOpen} setDatePickerOpen={setDatePickerOpen} />
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

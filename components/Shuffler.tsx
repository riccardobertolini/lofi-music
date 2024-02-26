import React from 'react'
import { Container } from './Shuffler.style'
import { MuiVariants } from '../constants/colors'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import { musicList } from '../data/musicList'

import { useAccessibilityContext } from '../contexts/AccessibilityContext'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { handleSetMusic } from '../store/lofiMusicReducer'

const Shuffler = ({ totalTracks }: { totalTracks: number }) => {
  const { tabIndex } = useAccessibilityContext()

  const dispatch = useDispatch<AppDispatch>()

  const setRandomTracks = (num: number) => {
    const newArr = [...Array.from(Array(totalTracks).keys())]
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
    }
    const selectedIndexs = newArr.slice(0, num)

    const newList = musicList
      .filter((_, index) => selectedIndexs.includes(index))
      .map((item) => item.src)
    dispatch(handleSetMusic(newList))

    return newArr.slice(0, num)
  }

  return (
    <Container>
      <ShuffleIcon
        onClick={() => setRandomTracks(3)}
        aria-label="shuffle random tracks"
        onKeyDown={(e) => {
          if (e.key == 'Return' || e.key == ' ' || e.key == 'Enter') {
            setRandomTracks(3)
          }
        }}
        tabIndex={tabIndex}
        sx={{ fontSize: '32px', color: MuiVariants.NEUTRAL }}
      />
    </Container>
  )
}

export default Shuffler

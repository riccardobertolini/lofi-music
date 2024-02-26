import React, { useState, useRef, useEffect } from 'react'
import { Mood } from '@mui/icons-material'
import {
  Container,
  CloseButton,
  ModalContent,
  ModalWrapper,
  ColorPickerWrapper,
  BackgroundColorWidget,
  MoodOption,
} from './SettingModal.style'
import IconButton from './IconButton'
import { useAccessibilityContext } from '../contexts/AccessibilityContext'
import { MuiVariants } from '../constants/colors'
import { musicList } from '../data/musicList'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { handleSetMusic } from '../store/lofiMusicReducer'

interface MoodOptions {
  name: string
  sources: string[]
}

const moodOptions: MoodOptions[] = [
  {
    name: 'Morning coffee',
    sources: ['/audio/sea.mp3', '/audio/harp.mp3'],
  },
  {
    name: 'Reflective',
    sources: ['/audio/piano.mp3', '/audio/rain-on-roof.mp3'],
  },
  {
    name: 'Summer camping',
    sources: ['/audio/forest_sounds.mp3', '/audio/campfire-crackling.mp3'],
  }
]

const MoodModal = () => {
  const { setModalVisible } = useAccessibilityContext()
  const ModalRef = useRef(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const dispatch = useDispatch<AppDispatch>()
  const openModal = (): void => {
    setIsOpen(true)
    setModalVisible(true)
  }

  const closeModal = (): void => {
    setIsOpen(false)
    setModalVisible(false)
  }

  const outsideClick = (e: MouseEvent): void => {
    if (ModalRef.current === e.target) {
      setIsOpen(false)
      setModalVisible(false)
    }
  }

  useEffect((): (() => void) => {
    document.addEventListener('mousedown', outsideClick)
    return () => {
      document.removeEventListener('mousedown', outsideClick)
    }
  }, [])

  const handleMoodChange = (sources: string[]): void => {
    const uniqueArray: string[] = []
    sources.forEach((source) => {
      musicList.forEach(
        (musicListItem) =>
          source === musicListItem.src && uniqueArray.push(musicListItem.src),
      )
    })
    uniqueArray.length > 0 && dispatch(handleSetMusic(uniqueArray))
  }

  return (
    <Container>
      <IconButton onClick={openModal}>
        <Mood
          aria-label="open mood modal"
          sx={{ fontSize: '24px', color: MuiVariants.NEUTRAL }}
        />
      </IconButton>

      {isOpen && (
        <ModalWrapper ref={ModalRef}>
          <ModalContent>
            <CloseButton
              onClick={closeModal}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key == ' ' || e.key == 'Enter' || e.key == 'Return') {
                  closeModal()
                }
              }}
              tabIndex={0}
              aria-label="close mood modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-6 h-6"
                stroke={'#FF0000'}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </CloseButton>
            <BackgroundColorWidget>
              <p>What is your mood?</p>
              <ColorPickerWrapper>
                {moodOptions.map((mood, index) => (
                  <MoodOption
                    key={index}
                    tabIndex={0}
                    aria-label={mood.name}
                    onClick={() => handleMoodChange(mood.sources)}
                  >
                    <div>{mood.name}</div>
                  </MoodOption>
                ))}
              </ColorPickerWrapper>
            </BackgroundColorWidget>
          </ModalContent>
        </ModalWrapper>
      )}
    </Container>
  )
}

export default MoodModal

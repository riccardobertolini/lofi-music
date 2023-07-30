import React, { useState, useRef, useEffect } from 'react'
import { SettingsOutlined } from '@mui/icons-material'

import {
  Container,
  CloseButton,
  ModalContent,
  ModalWrapper,
  ColorPickerWrapper,
} from './SettingModal.style'
import IconButton from './IconButton'
import { useAccessibilityContext } from '../contexts/AccessibilityContext'
import { MuiVariants } from '../constants/colors'

interface Color {
  name: string
  gradient: string
  fallback: string
}

const colors: Color[] = [
  {
    name: 'cool blue',
    gradient: 'linear-gradient(to right, #2193b0, #6dd5ed)',
    fallback: '#2193b0',
  },
  {
    name: 'moonlight forest',
    gradient: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
    fallback: '#0F2027',
  },
  {
    name: 'serenity',
    gradient: 'linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b)',
    fallback: '#aa4b6b',
  },
  {
    name: 'Sahara sky',
    gradient: 'linear-gradient(to right, #f4791f, #659999)',
    fallback: '#659999',
  },
]

const SettingModal = () => {
  const {setModalVisible} = useAccessibilityContext();
  const ModalRef = useRef(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedColor, setSelectedColor] = useState<Color>()

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

  useEffect(() => {
    if (selectedColor) {
      document.documentElement.style.backgroundColor = selectedColor.fallback
      document.documentElement.style.backgroundImage = selectedColor.gradient
    }
  }, [selectedColor])

  const handleColorChange = (color: Color) => {
    setSelectedColor(color)
  }

  return (
    <Container>
      <IconButton onClick={openModal} >
        <SettingsOutlined aria-label='open settings modal '
          sx={{ fontSize: '24px', color: MuiVariants.NEUTRAL }}
        />
      </IconButton>

      {isOpen && (
        <ModalWrapper ref={ModalRef}>
          <ModalContent>
            <CloseButton onClick={closeModal} onKeyDown={(e) => {
              if(e.key == " " || e.key == "Enter" || e.key =="Return"){
                closeModal()
              }
            }} tabIndex={0} aria-label="close settings modal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </CloseButton>
            <div className="aboutus">
              <br />
              Update the background colors
              <br />
              <ColorPickerWrapper>
                {colors.map((color, index) => (
                  <div key={index} onClick={() => handleColorChange(color)} onKeyDown={(e) => {
                    if(e.key == " " || e.key == "Return" || e.key == "Enter"){
                      handleColorChange(color)
                    }
                  }} tabIndex={0} aria-label={color + "as background"}>
                    <div
                      style={{
                        background: color.gradient,
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                      }}
                    ></div>
                    <div>{color.name}</div>
                  </div>
                ))}
              </ColorPickerWrapper>
            </div>
          </ModalContent>
        </ModalWrapper>
      )}
    </Container>
  )
}

export default SettingModal

import React, { useState, useRef, useEffect } from 'react'
import { SettingsOutlined } from '@mui/icons-material'

import {
  Container,
  CloseButton,
  ModalContent,
  ModalWrapper,
} from './SettingModal.style'
import IconButton from './IconButton'

import { MuiVariants } from '../constants/colors'

const SettingModal = () => {
  const ModalRef = useRef(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openModal = (): void => {
    setIsOpen(true)
  }

  const closeModal = (): void => {
    setIsOpen(false)
  }

  const outsideClick = (e: MouseEvent): void => {
    if (ModalRef.current === e.target) {
      setIsOpen(false)
    }
  }

  useEffect((): (() => void) => {
    document.addEventListener('mousedown', outsideClick)
    return () => {
      document.removeEventListener('mousedown', outsideClick)
    }
  }, [])

  return (
    <Container>
      <IconButton onClick={openModal}>
        <SettingsOutlined
          sx={{ fontSize: '24px', color: MuiVariants.NEUTRAL }}
        />
      </IconButton>

      {isOpen && (
        <ModalWrapper ref={ModalRef}>
          <ModalContent>
            <CloseButton onClick={closeModal}>
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
              Settings coming soon!
              <br />
            </div>
          </ModalContent>
        </ModalWrapper>
      )}
    </Container>
  )
}

export default SettingModal

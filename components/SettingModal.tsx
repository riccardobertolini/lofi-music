import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { SettingsOutlined } from '@mui/icons-material'
import IconButton from './IconButton'
import { MuiVariants } from '../constants/colors'

const Container = styled.div``

const ModalWrapper = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  position: relative;
  width: 40rem;
  height: 10rem;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  .aboutus {
    font-size: 1.2rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`

const CloseButton = styled.span`
  position: absolute;
  top: 16px;
  right: 13px;
  cursor: pointer;
  width: 40px;
  color: #fff;
  height: 40px;
  border-radius: 50%;
  background-image: linear-gradient(-225deg, #ff1361 67%, #fff800 100%);

  @media (max-width: 768px) {
    top: 10px;
    right: 8px;
    width: 30px;
    height: 30px;
  }
`
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

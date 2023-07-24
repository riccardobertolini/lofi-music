import styled from 'styled-components'

export const Container = styled.div`
margin-left: 5px;
`

export const ModalWrapper = styled.div`
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

export const ModalContent = styled.div`
  position: relative;
  width: 40rem;
  max-width: 90vw;
  min-height: 10rem;
  max-height: 90vh;
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

export const CloseButton = styled.span`
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
export const ColorPickerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin: 10px;
  }
`

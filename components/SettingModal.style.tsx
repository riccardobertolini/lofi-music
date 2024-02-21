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
  font-family: 'Ubuntu', sans-serif;
  position: relative;
  width: 100%;
  max-width: 450px;
  background-color: #fff;
  padding: 20px;
  align-items: center;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 80%;
  }
`

export const BackgroundColorWidget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  p {
    font-weight: bold;
  }
`
interface ColorOptionProps {
  background: string
  insideback: string
  textcolor: string
}
export const ColorOption = styled.div<ColorOptionProps>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  align-content: center;
  justify-content: left;
  cursor: pointer;
  border: 1px solid #eee;
  background: ${(props) => props.background};
  border-radius: 40px;
  min-width: 150px;

  div {
    padding: 10px;
    background: ${(props) => props.insideback};
    min-width: calc(100% - 20px);
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 600;
    transition: 0.2s;
    border-radius: 40px;
    text-align: center;
    color: ${(props) => props.textcolor};

    &:hover {
      background: transparent;
      color: white;
    }
  }
`

export const MoodOption = styled.div<any>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  align-content: center;
  justify-content: left;
  cursor: pointer;
  border: 1px solid #eee;
  background: ${(props) => props.background};
  border-radius: 40px;
  min-width: 150px;
  &:hover {
    border: 1px solid black;
  }

  div {
    padding: 10px;
    background: ${(props) => props.insideback};
    min-width: calc(100% - 20px);
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 600;
    transition: 0.2s;
    border-radius: 40px;
    text-align: center;
    color: ${(props) => props.textcolor};
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
  max-width: 400px;
  gap: 10px;
`

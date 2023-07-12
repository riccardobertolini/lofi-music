import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  .shuffler {
    height: 50px;
    width: 50px;
    cursor: pointer;
    color: #fff;

    content: '';
    background-size: contain;
    background-image: url('/img/shuffle.png');
    display: block;
  }

  @media (max-width: 768px) {
    .shuffler {
      height: 35px;
      width: 35px;
      top: 10px;
      right: 80px;
    }
  }
`

const Shuffler = ({
  setRandomTracks,
  totalTracks,
}: {
  setRandomTracks: (value: number[]) => void
  totalTracks: number
}) => {
  const getMultipleRandomTracks = (arr: number[], num: number) => {
    const newArr = [...arr]
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
    }
    return newArr.slice(0, num)
  }

  return (
    <Container>
      <div
        className="shuffler"
        onClick={() =>
          setRandomTracks(
            getMultipleRandomTracks(Array.from(Array(totalTracks).keys()), 3),
          )
        }
      />
    </Container>
  )
}

export default Shuffler

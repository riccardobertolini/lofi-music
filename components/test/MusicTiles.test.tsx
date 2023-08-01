import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import MusicTiles from './../MusicTiles'
import AccessibilityContextProvider from '../../contexts/AccessibilityContext'

jest.mock('./../TilePlayer', () => {
  return {
    TilePlayer: jest.fn(({ incrementActiveSounds, isPlaying }) => (
      <div
        onClick={() => incrementActiveSounds(isPlaying)}
        data-testid="tileplayer"
      >
        TilePlayer
      </div>
    )),
  }
})

const musicList = [
  { src: 'track1.mp3', imageSrc: 'image1.jpg' },
  { src: 'track2.mp3', imageSrc: 'image2.jpg' },
]

describe('MusicTiles', () => {
  it('renders without crashing', () => {
    render(
      <AccessibilityContextProvider>
        <MusicTiles musicList={musicList} randomTracks={[0]} />
      </AccessibilityContextProvider>,
    )
  })

  it('increments and decrements active sounds', () => {
    const { getAllByTestId, getByText } = render(
      <AccessibilityContextProvider>
        <MusicTiles musicList={musicList} randomTracks={[0]} />
      </AccessibilityContextProvider>,
    )
    const tilePlayers = getAllByTestId('tileplayer')

    fireEvent.click(tilePlayers[0])
    expect(getByText('Sounds active: 1')).toBeInTheDocument()

    fireEvent.click(tilePlayers[1])
    expect(getByText('Sounds active: 0')).toBeInTheDocument()
  })

  it('stops all sounds', () => {
    const { getByText } = render(
      <AccessibilityContextProvider>
        <MusicTiles musicList={musicList} randomTracks={[0]} />
      </AccessibilityContextProvider>,
    )
    const stopAllButton = getByText('Stop all')

    fireEvent.click(stopAllButton)
    expect(getByText('Sounds active: 0')).toBeInTheDocument()
  })
})

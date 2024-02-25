import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
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
  afterEach(() => {
    jest.clearAllMocks()
    jest.clearAllTimers()
    jest.useRealTimers()
  })

  it('renders without crashing', () => {
    render(
      <AccessibilityContextProvider>
        <MusicTiles
          musicList={musicList}
          randomTracks={[0]}
          setRandomTracks={() => {}}
        />
      </AccessibilityContextProvider>,
    )
  })

  it('increments and decrements active sounds', () => {
    const { getAllByTestId, getByText } = render(
      <AccessibilityContextProvider>
        <MusicTiles
          musicList={musicList}
          randomTracks={[0]}
          setRandomTracks={() => {}}
        />
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
        <MusicTiles
          musicList={musicList}
          randomTracks={[0]}
          setRandomTracks={() => {}}
        />
      </AccessibilityContextProvider>,
    )
    const stopAllButton = getByText('Stop all')

    fireEvent.click(stopAllButton)
    expect(getByText('Sounds active: 0')).toBeInTheDocument()
  })

  it('updates minutes and resets timer when timer reaches 60', () => {
    jest.useFakeTimers()

    const { getAllByTestId, getByTestId } = render(
      <AccessibilityContextProvider>
        <MusicTiles
          musicList={musicList}
          randomTracks={[0]}
          setRandomTracks={() => {}}
        />
      </AccessibilityContextProvider>,
    )

    // Assume the incrementActiveSounds is called, starts timer
    const tilePlayers = getAllByTestId('tileplayer')
    fireEvent.click(tilePlayers[0])

    // Simulate 60 seconds passing
    act(() => {
      jest.advanceTimersByTime(60000)
    })

    // The state should be 1 minute and 0 seconds
    const minutesElement = getByTestId('minutes-text')
    const secondsElement = getByTestId('seconds-text')
    expect(minutesElement.textContent).toBe('01')
    expect(secondsElement.textContent).toBe('00')

    jest.useRealTimers()
  })
})

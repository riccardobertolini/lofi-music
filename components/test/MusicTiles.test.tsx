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
  afterAll(() => {
    jest.clearAllTimers()
    jest.useRealTimers()
  })

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

  it('updates minutes and resets timer when timer reaches 60', () => {
    jest.useFakeTimers()

    const { container } = render(
      <AccessibilityContextProvider>
        <MusicTiles musicList={musicList} randomTracks={[0]} />
      </AccessibilityContextProvider>,
    )

    // Simulate the timer reaching 60 seconds step by step
    act(() => {
      jest.advanceTimersToNextTimer() // Step 1: 0 seconds
    })

    // The state should be 0 minutes and 0 seconds
    const minutesElement = container.querySelector(
      '[data-testid="minutes-text"]',
    )
    const secondsElement = container.querySelector(
      '[data-testid="seconds-text"]',
    )
    expect(minutesElement?.textContent).toBe('00')
    expect(secondsElement?.textContent).toBe('00')

    act(() => {
      jest.advanceTimersToNextTimer() // Step 2: 1 minute
    })

    jest.useRealTimers()
  })
})

import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import MusicTiles from './../MusicTiles'
import { Provider } from 'react-redux'
import { store } from '../../store'

jest.mock('react-player/lazy', () => {
  return {
    __esModule: true,
    default: jest.fn(() => <div>ReactPlayer</div>),
  }
})

jest.mock('../../contexts/AccessibilityContext', () => ({
  useAccessibilityContext: jest
    .fn()
    .mockImplementation(() => ({ tabIndex: 0 })),
}))

const musicList = [
  {
    imageSrc: '/img/lofi.jpg',
    src: '/audio/empty-mind-118973.mp3',
  },
  {
    imageSrc: '/img/forest.jpg',
    src: '/audio/forest_sounds.mp3',
  },
]

describe('MusicTiles', () => {
  afterEach(() => {
    jest.clearAllMocks()
    jest.clearAllTimers()
    jest.useRealTimers()
  })

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <MusicTiles musicList={musicList} />
      </Provider>,
    )
  })

  it('increments and decrements active sounds', () => {
    render(
      <Provider store={store}>
        <MusicTiles musicList={musicList} />
      </Provider>,
    )
    const tilePlayers = screen.getAllByTestId('togglePlayButton')

    expect(screen.getByText('Sounds active: 0')).toBeInTheDocument()
    fireEvent.click(tilePlayers[0])

    expect(screen.getByText('Sounds active: 1')).toBeInTheDocument()

    fireEvent.click(tilePlayers[1])
    expect(screen.getByText('Sounds active: 2')).toBeInTheDocument()
    fireEvent.click(tilePlayers[0])
    fireEvent.click(tilePlayers[1])
    expect(screen.getByText('Sounds active: 0')).toBeInTheDocument()
  })

  it('stops all sounds', () => {
    render(
      <Provider store={store}>
        <MusicTiles musicList={musicList} />
      </Provider>,
    )
    const tilePlayers = screen.getAllByTestId('togglePlayButton')
    fireEvent.click(tilePlayers[0])
    fireEvent.click(tilePlayers[1])
    expect(screen.getByText('Sounds active: 2')).toBeInTheDocument()
    const stopAllButton = screen.getByText('Stop all')
    fireEvent.click(stopAllButton)
    expect(screen.getByText('Sounds active: 0')).toBeInTheDocument()
  })

  it('updates minutes and resets timer when timer reaches 60', () => {
    jest.useFakeTimers()

    render(
      <Provider store={store}>
        <MusicTiles musicList={musicList} />
      </Provider>,
    )

    // Assume the incrementActiveSounds is called, starts timer
    const tilePlayers = screen.getAllByTestId('togglePlayButton')
    fireEvent.click(tilePlayers[0])

    // Simulate 60 seconds passing
    act(() => {
      jest.advanceTimersByTime(60000)
    })

    // The state should be 1 minute and 0 seconds
    const minutesElement = screen.getByTestId('minutes-text')
    const secondsElement = screen.getByTestId('seconds-text')
    expect(minutesElement.textContent).toBe('01')
    expect(secondsElement.textContent).toBe('00')

    jest.useRealTimers()
  })
})

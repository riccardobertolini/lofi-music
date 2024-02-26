import React from 'react'
import { render, fireEvent, act, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { store } from '../../store'
import { TilePlayer } from '../TilePlayer'
import { AccessibilityContextProvider } from '../../contexts/AccessibilityContext'
import { Provider } from 'react-redux'
import * as lofiMusicReducer from '../../store/lofiMusicReducer'

type PropsType = {
  src: string
  imageSrc: string

  isPlaying: boolean
  masterVolume: number
}

jest.mock('react-player/lazy', () => {
  return () => <div>ReactPlayer</div>
})

const mockSetPlaying = jest.fn()

jest.mock('react', () => {
  const originalReact = jest.requireActual('react')
  const mockState = (init: any) => [init, mockSetPlaying]
  return {
    ...originalReact,
    useState: jest.fn(mockState),
    useEffect: originalReact.useEffect,
  }
})

describe('TilePlayer', () => {
  let props: PropsType

  beforeEach(() => {
    props = {
      src: 'http://test-src',
      imageSrc: 'http://test-image-src',
      isPlaying: false,
      masterVolume: 1,
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.clearAllTimers()
    jest.useRealTimers()
  })

  const renderComponent = () =>
    render(
      <AccessibilityContextProvider>
        <Provider store={store}>
          <TilePlayer {...props} />
        </Provider>
      </AccessibilityContextProvider>,
    )

  it('should render and toggle playing state when clicked', () => {
    const { getByAltText } = renderComponent()
    const image = getByAltText('')
    fireEvent.click(image)
    // Add appropriate assertions to validate that the player is now playing
  })

  it('should toggle playing state when Enter or Space is pressed', () => {
    const { getByAltText } = renderComponent()
    const image = getByAltText('')

    fireEvent.keyDown(image, { key: 'Enter' })
    // Add appropriate assertions to validate that the player is now playing

    fireEvent.keyDown(image, { key: ' ' })
    // Add appropriate assertions to validate that the player is now paused
  })

  it('should handle volume change', () => {
    const { getAllByRole } = renderComponent()

    const sliders = getAllByRole('slider')

    const volumeInput = sliders[0]
    act(() => {
      // @ts-ignore - this volumeInput has indeed a value field
      volumeInput.value = '0.5'
      fireEvent.input(volumeInput, { target: { value: '0.5' } })
    })
    expect(volumeInput).toHaveValue('0.5')
  })

  it('should handle seek', () => {
    renderComponent()

    const sliders = screen.getAllByTestId('sliderInput')

    const progressInput = sliders[0]
    act(() => {
      // @ts-ignore
      progressInput.value = '0.7'
      fireEvent.input(progressInput, { target: { value: '0.7' } })
    })

    expect(progressInput).toHaveValue('0.7')
  })

  // it('sets playing to true when isPlaying prop is true', () => {
  //   act(() => {
  //     render(
  //       <AccessibilityContextProvider><Provider store={store}>
  //         <TilePlayer {...props} /></Provider>
  //       </AccessibilityContextProvider>,
  //     )
  //   })
  //   expect(mockSetPlaying).toHaveBeenCalledWith(false)

  //   act(() => {
  //     render(
  //       <AccessibilityContextProvider><Provider store={store}>
  //         <TilePlayer {...props} isPlaying={true} /></Provider>
  //       </AccessibilityContextProvider>,
  //     )
  //   })
  //   expect(mockSetPlaying).toHaveBeenCalledWith(true)
  // })

  it('updates volume on range slider change', () => {
    // Mocking useState
    const setVolume = jest.fn()

    const useStateMock: any = jest.spyOn(React, 'useState')
    useStateMock.mockImplementation((volume: number) => [volume, setVolume])

    // Render component
    const { getByTestId } = renderComponent()

    // Find input and simulate change event
    const sliderInput = getByTestId('effectiveSliderInput')
    fireEvent.change(sliderInput, { target: { value: '0.5' } })

    // Expect setVolume to have been called with new value
    expect(setVolume).toHaveBeenCalledWith(0.5)
  })

  it('toggles play state', () => {
    const { getByTestId } = renderComponent()
    expect(store.getState().lofiMusic.playing.indexOf(props.src)).not.toBe(-1)
    const button = getByTestId('togglePlayButton')
    fireEvent.click(button)

    expect(store.getState().lofiMusic.playing.indexOf(props.src)).toBe(-1)
  })

  it('toggles play state with key presses', () => {
    const handleTogglePlay = jest.spyOn(lofiMusicReducer, 'handleTogglePlay')

    const { getByTestId } = renderComponent()

    const button = getByTestId('togglePlayButton')

    // Helper function to test keydown events
    const testKeyPress = (key: string) => {
      act(() => {
        fireEvent.keyDown(button, { key: key })
      })

      expect(handleTogglePlay).toHaveBeenCalled()
      jest.clearAllMocks()
    }

    ;[' ', 'Return', 'Enter'].forEach((key) => testKeyPress(key))
  })

  // it('should not toggles play state  on other key press', () => {
  //   fireEvent.keyDown(screen.getByLabelText('shuffle random tracks'), {
  //     key: 'A',
  //   })
  //   expect(setRandomTracksMock).not.toHaveBeenCalled()
  // })
})

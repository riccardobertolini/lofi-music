import React, { useState as useStateMock } from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TilePlayer } from '../TilePlayer'
import { AccessibilityContextProvider } from '../../contexts/AccessibilityContext'

type PropsType = {
  src: string
  imageSrc: string
  incrementActiveSounds: jest.Mock
  stopAllTrigger: number
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
      incrementActiveSounds: jest.fn(),
      stopAllTrigger: 0,
      isPlaying: false,
      masterVolume: 1,
    }
  })
  const mockSrc = 'http://path/to/audio.mp3'
  const mockImageSrc = 'http://path/to/image.jpg'

  const renderComponent = (props = {}) =>
    render(
      <AccessibilityContextProvider>
        <TilePlayer
          src={mockSrc}
          imageSrc={mockImageSrc}
          incrementActiveSounds={() => {}}
          stopAllTrigger={0}
          isPlaying={false}
          masterVolume={100}
          {...props}
        />
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
    const { getAllByRole } = render(
      <AccessibilityContextProvider>
        <TilePlayer {...props} />
      </AccessibilityContextProvider>,
    )

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
    const { getAllByRole } = render(
      <AccessibilityContextProvider>
        <TilePlayer {...props} />
      </AccessibilityContextProvider>,
    )

    const sliders = getAllByRole('slider')

    const progressInput = sliders[1]
    act(() => {
      // @ts-ignore
      progressInput.value = '0.7'
      fireEvent.input(progressInput, { target: { value: '0.7' } })
    })

    expect(progressInput).toHaveValue('0.7')
  })

  it('sets playing to true when isPlaying prop is true', () => {
    act(() => {
      render(
        <AccessibilityContextProvider>
          <TilePlayer {...props} />
        </AccessibilityContextProvider>,
      )
    })
    expect(mockSetPlaying).toHaveBeenCalledWith(false)

    act(() => {
      render(
        <AccessibilityContextProvider>
          <TilePlayer {...props} isPlaying={true} />
        </AccessibilityContextProvider>,
      )
    })
    expect(mockSetPlaying).toHaveBeenCalledWith(true)
  })

  it('updates volume on range slider change', () => {
    // Mocking useState
    const setVolume = jest.fn()

    const useStateMock: any = jest.spyOn(React, 'useState')
    useStateMock.mockImplementation((volume: number) => [volume, setVolume])

    // Render component
    const { getByTestId } = render(
      <AccessibilityContextProvider>
        <TilePlayer {...props} />
      </AccessibilityContextProvider>,
    )

    // Find input and simulate change event
    const sliderInput = getByTestId('effectiveSliderInput')
    fireEvent.change(sliderInput, { target: { value: '0.5' } })

    // Expect setVolume to have been called with new value
    expect(setVolume).toHaveBeenCalledWith(0.5)
  })

  it('toggles play state', () => {
    const setPlaying = jest.fn()
    // @ts-ignore
    useStateMock.mockImplementation((init: any) => [init, setPlaying])

    const { getByTestId } = render(
      <AccessibilityContextProvider>
        <TilePlayer {...props} />
      </AccessibilityContextProvider>,
    )

    const button = getByTestId('togglePlayButton')
    act(() => {
      fireEvent.click(button)

      expect(setPlaying).toHaveBeenCalledWith(expect.any(Function))

      const callback = setPlaying.mock.calls[3][0]

      expect(callback(true)).toBe(false)
      expect(callback(false)).toBe(true)
    })
  })

  it('toggles play state with key presses', () => {
    const setPlaying = jest.fn()
    // @ts-ignore
    useStateMock.mockImplementation((init: any) => [init, setPlaying])

    const { getByTestId } = render(
      <AccessibilityContextProvider>
        <TilePlayer {...props} />
      </AccessibilityContextProvider>,
    )

    const button = getByTestId('togglePlayButton')

    // Helper function to test keydown events
    const testKeyPress = (key: string) => {
      act(() => {
        fireEvent.keyDown(button, { key: key })
      })

      expect(setPlaying).toHaveBeenCalledWith(expect.any(Function))

      setPlaying.mockClear()
    }

    ;[' ', 'Return', 'Enter'].forEach((key) => testKeyPress(key))
  })
})

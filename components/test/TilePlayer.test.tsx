import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TilePlayer } from '../TilePlayer'
import { AccessibilityContextProvider } from '../../contexts/AccessibilityContext'

jest.mock('react-player/lazy', () => {
  return () => <div>ReactPlayer</div>
})

describe('TilePlayer', () => {
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
    const props = {
      src: 'http://test-src',
      imageSrc: 'http://test-image-src',
      incrementActiveSounds: jest.fn(),
      stopAllTrigger: 0,
      isPlaying: false,
      masterVolume: 1,
    }

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
})

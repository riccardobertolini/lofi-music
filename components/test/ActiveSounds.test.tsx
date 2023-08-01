import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ActiveSounds from '../ActiveSounds'

jest.mock('../../contexts/AccessibilityContext', () => ({
  useAccessibilityContext: jest
    .fn()
    .mockImplementation(() => ({ tabIndex: 0 })),
}))

describe('ActiveSounds', () => {
  it('renders correctly', () => {
    render(
      <ActiveSounds
        timer={5}
        minutes={5}
        activeSounds={1}
        stopAll={() => {}}
        setMasterVolume={() => {}}
      />,
    )
    expect(screen.getByText('05:05')).toBeInTheDocument()
    expect(screen.getByText('Sounds active: 1')).toBeInTheDocument()
  })

  it('formats time correctly with leading zeros', () => {
    render(
      <ActiveSounds
        timer={5}
        minutes={5}
        activeSounds={1}
        stopAll={() => {}}
        setMasterVolume={() => {}}
      />,
    )
    expect(screen.getByText('05:05')).toBeInTheDocument()
  })

  it('formats time correctly without leading zeros', () => {
    render(
      <ActiveSounds
        timer={15}
        minutes={10}
        activeSounds={1}
        stopAll={() => {}}
        setMasterVolume={() => {}}
      />,
    )
    expect(screen.getByText('10:15')).toBeInTheDocument()
  })

  it('hides the link when activeSounds is 0', () => {
    render(
      <ActiveSounds
        timer={5}
        minutes={5}
        activeSounds={0}
        stopAll={() => {}}
        setMasterVolume={() => {}}
      />,
    )
    const link = screen.getByText('Stop all')
    expect(link).toHaveStyle({
      cursor: 'default',
    })
  })

  it('shows the link when activeSounds is greater than 0', () => {
    render(
      <ActiveSounds
        timer={5}
        minutes={5}
        activeSounds={1}
        stopAll={() => {}}
        setMasterVolume={() => {}}
      />,
    )
    const link = screen.getByText('Stop all')
    expect(link).not.toHaveStyle({
      pointerEvents: 'none',
      userSelect: 'none',
      cursor: 'pointer',
    })
  })

  it('calls stopAll function when link is clicked', () => {
    const stopAllMock = jest.fn()
    render(
      <ActiveSounds
        timer={5}
        minutes={5}
        activeSounds={1}
        stopAll={stopAllMock}
        setMasterVolume={() => {}}
      />,
    )
    const link = screen.getByText('Stop all')
    fireEvent.click(link)
    expect(stopAllMock).toHaveBeenCalled()
  })
})

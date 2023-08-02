import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import FullScreenMode from '../FullScreenMode'
import { enterFullScreen, exitFullScreen } from '../../utils/FullScreenMode'
import AccessibilityContextProvider from '../../contexts/AccessibilityContext'

jest.mock('../../utils/FullScreenMode', () => ({
  enterFullScreen: jest.fn(),
  exitFullScreen: jest.fn(),
}))

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <AccessibilityContextProvider>{component}</AccessibilityContextProvider>,
  )
}

describe('<FullScreenMode />', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  beforeEach(() => {
    jest.restoreAllMocks()
  })

  it('renders the FullscreenOutlined icon when not in full-screen mode', () => {
    renderWithProviders(<FullScreenMode />)
    expect(screen.getByTestId('FullscreenOutlinedIcon')).toBeInTheDocument()
  })

  it('toggles between full-screen and normal mode when clicked', () => {
    renderWithProviders(<FullScreenMode />)

    expect(screen.getByTestId('FullscreenOutlinedIcon')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button'))
    expect(enterFullScreen).toHaveBeenCalled()
    expect(screen.getByTestId('FullscreenExitOutlinedIcon')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button'))

    expect(exitFullScreen).toHaveBeenCalled()
    expect(screen.getByTestId('FullscreenOutlinedIcon')).toBeInTheDocument()
  })

  it('returns early if fullscreenElement is falsy', () => {
    Object.defineProperty(document, 'fullscreenElement', {
      value: null,
      writable: true,
      configurable: true,
    })

    expect(document.fullscreenElement).toBeNull()
  })
})

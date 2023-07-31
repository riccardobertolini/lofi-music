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
})

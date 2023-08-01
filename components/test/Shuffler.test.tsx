import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Shuffler from './../Shuffler'
import AccessibilityContextProvider from '../../contexts/AccessibilityContext'

describe('Shuffler Component', () => {
  let setRandomTracksMock: jest.Mock

  beforeEach(() => {
    setRandomTracksMock = jest.fn()
    render(
      <AccessibilityContextProvider>
        <Shuffler setRandomTracks={setRandomTracksMock} totalTracks={10} />
      </AccessibilityContextProvider>,
    )
  })

  it('should call setRandomTracks when the shuffle icon is clicked', () => {
    const shuffleIcon = screen.getByLabelText('shuffle random tracks')
    fireEvent.click(shuffleIcon)
    expect(setRandomTracksMock).toHaveBeenCalled()
  })

  it('should render the shuffle icon', () => {
    expect(screen.getByLabelText('shuffle random tracks')).toBeInTheDocument()
  })

  it('should call setRandomTracks function on click', () => {
    fireEvent.click(screen.getByLabelText('shuffle random tracks'))
    expect(setRandomTracksMock).toHaveBeenCalled()
  })

  it('should call setRandomTracks function on Enter key press', () => {
    fireEvent.keyDown(screen.getByLabelText('shuffle random tracks'), {
      key: 'Enter',
    })
    expect(setRandomTracksMock).toHaveBeenCalled()
  })

  it('should call setRandomTracks function on Return key press', () => {
    fireEvent.keyDown(screen.getByLabelText('shuffle random tracks'), {
      key: 'Return',
    })
    expect(setRandomTracksMock).toHaveBeenCalled()
  })

  it('should call setRandomTracks function on Space key press', () => {
    fireEvent.keyDown(screen.getByLabelText('shuffle random tracks'), {
      key: ' ',
    })
    expect(setRandomTracksMock).toHaveBeenCalled()
  })

  it('should not call setRandomTracks function on other key press', () => {
    fireEvent.keyDown(screen.getByLabelText('shuffle random tracks'), {
      key: 'A',
    })
    expect(setRandomTracksMock).not.toHaveBeenCalled()
  })
})

import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Shuffler from './../Shuffler'
import AccessibilityContextProvider from '../../contexts/AccessibilityContext'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import * as lofiMusicReducer from '../../store/lofiMusicReducer'

const mockStore = configureStore([])
const setRandomTracksMock = jest.spyOn(lofiMusicReducer, 'handleSetMusic')
describe('Shuffler Component', () => {
  let store: any

  beforeEach(() => {
    store = mockStore({
      lofiMusic: {
        playing: [],
        masterVolume: 1,
      },
    })
    render(
      <Provider store={store}>
        <AccessibilityContextProvider>
          <Shuffler totalTracks={10} />
        </AccessibilityContextProvider>
      </Provider>,
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.clearAllTimers()
    jest.useRealTimers()
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

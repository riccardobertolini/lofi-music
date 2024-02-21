import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ActiveSounds from '../ActiveSounds'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import * as lofiMusicReducer from '../../store/lofiMusicReducer'

const mockStore = configureStore([])

jest.mock('../../contexts/AccessibilityContext', () => ({
  useAccessibilityContext: jest
    .fn()
    .mockImplementation(() => ({ tabIndex: 0 })),
}))

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

const mockHandlestopAllTrigger = jest.spyOn(
  lofiMusicReducer,
  'handlestopAllTrigger',
)
const mockHandleMasterVolume = jest.spyOn(
  lofiMusicReducer,
  'handleMasterVolume',
)

describe('ActiveSounds', () => {
  let store: any

  beforeEach(() => {
    store = mockStore({
      lofiMusic: {
        playing: [],
        masterVolume: 1,
      },
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.clearAllTimers()
    jest.useRealTimers()
  })

  it('renders correctly', () => {
    ;(React.useState as jest.Mock)
      .mockReturnValueOnce([5, jest.fn()])
      .mockReturnValueOnce([5, jest.fn()])
      .mockReturnValueOnce([false, jest.fn()])

    render(
      <Provider store={store}>
        <ActiveSounds activeSounds={1} />
      </Provider>,
    )
    const minutesElement = screen.getByTestId('minutes-text')
    const secondsElement = screen.getByTestId('seconds-text')

    expect(minutesElement).toBeInTheDocument()
    expect(minutesElement).toHaveTextContent('05')

    expect(secondsElement).toBeInTheDocument()
    expect(secondsElement).toHaveTextContent('05')

    expect(screen.getByText('Sounds active: 1')).toBeInTheDocument()
  })

  it('formats time correctly with leading zeros', () => {
    ;(React.useState as jest.Mock)
      .mockReturnValueOnce([5, jest.fn()])
      .mockReturnValueOnce([5, jest.fn()])
      .mockReturnValueOnce([false, jest.fn()])
    render(
      <Provider store={store}>
        <ActiveSounds activeSounds={1} />
      </Provider>,
    )
    const minutesElement = screen.getByTestId('minutes-text')
    const secondsElement = screen.getByTestId('seconds-text')

    expect(minutesElement).toBeInTheDocument()
    expect(minutesElement).toHaveTextContent('05')

    expect(secondsElement).toBeInTheDocument()
    expect(secondsElement).toHaveTextContent('05')
  })

  it('formats time correctly without leading zeros', () => {
    ;(React.useState as jest.Mock)
      .mockReturnValueOnce([15, jest.fn()])
      .mockReturnValueOnce([10, jest.fn()])
      .mockReturnValueOnce([false, jest.fn()])
    render(
      <Provider store={store}>
        <ActiveSounds activeSounds={1} />
      </Provider>,
    )

    const minutesElement = screen.getByTestId('minutes-text')
    const secondsElement = screen.getByTestId('seconds-text')

    expect(minutesElement).toBeInTheDocument()
    expect(minutesElement).toHaveTextContent('10')

    expect(secondsElement).toBeInTheDocument()
    expect(secondsElement).toHaveTextContent('15')
  })

  it('hides the link when activeSounds is 0', () => {
    ;(React.useState as jest.Mock)
      .mockReturnValueOnce([5, jest.fn()])
      .mockReturnValueOnce([5, jest.fn()])
      .mockReturnValueOnce([false, jest.fn()])
    render(
      <Provider store={store}>
        <ActiveSounds activeSounds={0} />
      </Provider>,
    )
    const link = screen.getByText('Stop all')
    expect(link).not.toBeVisible()
  })

  it('shows the link when activeSounds is greater than 0', () => {
    ;(React.useState as jest.Mock)
      .mockReturnValueOnce([5, jest.fn()])
      .mockReturnValueOnce([5, jest.fn()])
      .mockReturnValueOnce([false, jest.fn()])
    render(
      <Provider store={store}>
        <ActiveSounds activeSounds={1} />
      </Provider>,
    )
    const link = screen.getByText('Stop all')
    expect(link).not.toHaveStyle({
      pointerEvents: 'none',
      userSelect: 'none',
      cursor: 'pointer',
    })
  })

  it('calls stopAll function when link is clicked', () => {
    ;(React.useState as jest.Mock)
      .mockReturnValueOnce([5, jest.fn()])
      .mockReturnValueOnce([5, jest.fn()])
      .mockReturnValueOnce([false, jest.fn()])
    const stopAllMock = mockHandlestopAllTrigger

    render(
      <Provider store={store}>
        <ActiveSounds activeSounds={1} />
      </Provider>,
    )
    const link = screen.getByText('Stop all')
    fireEvent.click(link)
    expect(stopAllMock).toHaveBeenCalled()
  })

  it('calls setMasterVolume with the correct value when input changes', () => {
    ;(React.useState as jest.Mock)
      .mockReturnValueOnce([5, jest.fn()])
      .mockReturnValueOnce([5, jest.fn()])
      .mockReturnValueOnce([false, jest.fn()])

    const setMasterVolumeMock = mockHandleMasterVolume
    render(
      <Provider store={store}>
        <ActiveSounds activeSounds={1} />
      </Provider>,
    )
    const input = screen.getByRole('slider')
    fireEvent.change(input, { target: { value: '0.5' } })
    expect(setMasterVolumeMock).toHaveBeenCalledWith(0.5)
  })
})

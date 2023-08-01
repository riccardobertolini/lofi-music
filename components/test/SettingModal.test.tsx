import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import SettingModal from './../SettingModal'
import { AccessibilityContextProvider } from '../../contexts/AccessibilityContext'

describe('SettingModal Component', () => {
  beforeEach(() => {
    render(
      <AccessibilityContextProvider>
        <SettingModal />
      </AccessibilityContextProvider>,
    )
  })

  it('should render setting button', () => {
    expect(screen.getByLabelText('open settings modal')).toBeInTheDocument()
  })

  it('should open modal on button click', () => {
    const button = screen.getByLabelText('open settings modal')
    fireEvent.click(button)
    expect(screen.getByLabelText('close settings modal')).toBeInTheDocument()
  })

  it('should close modal on close button click', () => {
    const button = screen.getByLabelText('open settings modal')
    fireEvent.click(button)
    const closeButton = screen.getByLabelText('close settings modal')
    fireEvent.click(closeButton)
    expect(
      screen.queryByLabelText('close settings modal'),
    ).not.toBeInTheDocument()
  })

  it('should update the background color on color selection', async () => {
    const button = screen.getByLabelText('open settings modal')
    fireEvent.click(button)

    const colorDiv = await screen.findByText('cool blue')
    fireEvent.click(colorDiv)

    // Assuming the CSS variables are being updated directly on the document element
    expect(document.documentElement.style.backgroundColor).toBe(
      'rgb(33, 147, 176)',
    )
  })
})

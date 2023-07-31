import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import IconButton from './../IconButton'

// Mocking the useAccessibilityContext hook
jest.mock('../../contexts/AccessibilityContext', () => ({
  useAccessibilityContext: jest.fn().mockReturnValue({ tabIndex: 3 }),
}))

describe('IconButton', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<IconButton>Click Me</IconButton>)
    expect(getByText('Click Me')).toBeInTheDocument()
  })

  it('handles onClick correctly', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <IconButton onClick={handleClick}>Click Me</IconButton>,
    )
    fireEvent.click(getByText('Click Me'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('applies the correct tabIndex', () => {
    const { getByText } = render(<IconButton>Click Me</IconButton>)
    expect(getByText('Click Me').closest('button')).toHaveAttribute(
      'tabindex',
      '3',
    )
  })

  it('renders with correct type', () => {
    const { getByText } = render(
      <IconButton type="submit">Click Me</IconButton>,
    )
    expect(getByText('Click Me').closest('button')).toHaveAttribute(
      'type',
      'submit',
    )
  })
})

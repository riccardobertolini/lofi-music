import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import AccessibilityContextProvider, {
  useAccessibilityContext,
} from './AccessibilityContext' // Change the path accordingly

const DummyComponent = () => {
  useAccessibilityContext()
  return <div>Dummy component</div>
}

describe('AccessibilityContext', () => {
  it('should throw an error if useAccessibilityContext is used outside of the AccessibilityContextProvider', () => {
    // We need to catch the error in order to assert it, so we wrap the code inside a function
    const renderWithoutProvider = () => {
      act(() => {
        render(<DummyComponent />)
      })
    }

    expect(renderWithoutProvider).toThrow(
      'useAccessibilityContext must be used within an AccessibilityContextProvider',
    )
  })

  it('should not throw an error if useAccessibilityContext is used within the AccessibilityContextProvider', () => {
    const renderWithProvider = () => {
      act(() => {
        render(
          <AccessibilityContextProvider>
            <DummyComponent />
          </AccessibilityContextProvider>,
        )
      })
    }

    expect(renderWithProvider).not.toThrow()
  })
})

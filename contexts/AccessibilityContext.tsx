import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

interface AccessibilityContextProps {
  modalVisible: boolean
  setModalVisible: (visible: boolean) => void
  tabIndex: number
}

export const AccessibilityContext = createContext<
  AccessibilityContextProps | undefined
>(undefined)

export const useAccessibilityContext = () => {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error(
      'useAccessibilityContext must be used within an AccessibilityContextProvider',
    )
  }
  return context
}

interface AccessibilityContextProviderProps {
  children: ReactNode
}

export const AccessibilityContextProvider: React.FC<
  AccessibilityContextProviderProps
> = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [tabIndex, setTabIndex] = useState(0)

  // update tabindex on modal state change
  useEffect(() => {
    if (modalVisible) {
      setTabIndex(-1)
    } else {
      setTabIndex(0)
    }
  }, [modalVisible])

  return (
    <AccessibilityContext.Provider
      value={{
        modalVisible,
        setModalVisible,
        tabIndex,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export default AccessibilityContextProvider

import React, { createContext, useContext, useState, useEffect } from "react";

const AccessibilityContext = createContext();

export const useAccessibilityContext = () => useContext(AccessibilityContext);

const AccessibilityContextProvider = ({ children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);

    // update tabindex on modal state change
    useEffect(() => {
        if (modalVisible) {
            setTabIndex(-1);
        } else {
            setTabIndex(0);
        }
    }, [modalVisible]);

    return (
        <AccessibilityContext.Provider
            value={{
                modalVisible,
                setModalVisible,
                tabIndex
            }}
        >
            {children}
        </AccessibilityContext.Provider>
    );
};

export default AccessibilityContextProvider;
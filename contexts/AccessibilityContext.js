import React, { createContext, useContext, useState, useEffect } from "react";

const AccessibilityContext = createContext();

export const useAccessibilityContext = () => useContext(AccessibilityContext);

const AccessibilityContextProvider = ({ children }) => {
    // States for modal visibility, tabIndex, keyCodes, and colors
    const [modalVisible, setModalVisible] = useState(false);
    const [submitKeys, setSubmitKeys] = useState([]);
    const [exitKeys, setExitKeys] = useState([]);
    const [mainColor, setMainColor] = useState("#007bff");
    const [secondaryColor, setSecondaryColor] = useState("#6c757d");
    const [fontColor, setFontColor] = useState("#000000");
    const [font, setFont] = useState("Arial, sans-serif");
    const [tabBoardHighlightColor, setTabBoardHighlightColor] = useState("#ffcc00");
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        if (modalVisible) {
            setTabIndex(-1);
        } else {
            setTabIndex(0);
        }
    }, [modalVisible]);

    /*

const OnKeySubmitKeyPress = (e,callBack) => {
    if (submitKeys.includes(e.keyCode)) {
        callBack();
    }

}
use callback also do exit keys

const handleKeyPress = useCallback(
    (e) => {
        if (submitKeys.includes(e.keyCode)) {
            callBack();
        }
    },
    [submitKeys, callBack]
  );

*/

    return (
        <AccessibilityContext.Provider
            value={{
                modalVisible,
                setModalVisible,
                tabIndex,
                submitKeys,
                setSubmitKeys,
                exitKeys,
                setExitKeys,
                mainColor,
                setMainColor,
                secondaryColor,
                setSecondaryColor,
                fontColor,
                setFontColor,
                font,
                setFont,
                tabBoardHighlightColor,
                setTabBoardHighlightColor
            }}
        >
            {children}
        </AccessibilityContext.Provider>
    );
};

export default AccessibilityContextProvider;
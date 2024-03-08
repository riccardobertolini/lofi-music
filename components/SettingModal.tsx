import React, { useState, useRef, useEffect } from 'react'
import { SettingsOutlined, DarkMode, DarkModeOutlined } from '@mui/icons-material'
import {
  Container,
  CloseButton,
  ModalContent,
  ModalWrapper,
  ColorPickerWrapper,
  BackgroundColorWidget,
  ColorOption,
} from './SettingModal.style'
import IconButton from './IconButton'
import { useAccessibilityContext } from '../contexts/AccessibilityContext'
import { ColorCodes, MuiVariants } from '../constants/colors'
import { ColorSet, DarkModeUtils } from '../utils/DarkModeUtils';


class ColorTheme {
  public name: string;
  private _gradientType: number;
  private _colorSet: ColorSet;

  constructor(name: string, gradientType: number, colorSet: ColorSet) {
    this.name = name,
    this._gradientType = gradientType;
    this._colorSet = colorSet
  }

  //linear-gradient( -50deg, #000 0%, #44107a 55%, #ff1361 66%, #44107a 76%, #000 100% );
  public get gradient(): string {
    switch (this._gradientType) {
      case 1:
        return `linear-gradient( -50deg, #000 0%, ${this._colorSet.secondary} 55%, ${this._colorSet.primary} 66%, ${this._colorSet.secondary} 76%, #000 100% )`;
      case 2:
        return `linear-gradient(to right, ${this._colorSet.primary}, ${this._colorSet.secondary})`;
      case 3:
        return `linear-gradient(to right, ${this._colorSet.accent}, ${this._colorSet.secondary}, ${this._colorSet.primary})`;
      case 4:
        return `linear-gradient(to right, ${this._colorSet.secondary}, ${this._colorSet.primary})`;
      default:
        return `linear-gradient(to right, ${this._colorSet.accent}, ${this._colorSet.secondary}, ${this._colorSet.primary})`; 
    }
  }

  public get fallback(): string {
    return this._colorSet.primary;
  }
}

const themes: ColorTheme[] = [
  new ColorTheme("purple-pink", 1, new ColorSet("#ff1361", "#44107a")),
  new ColorTheme("cool blue", 2, new ColorSet("#2193b0", "#6dd5ed")),
  new ColorTheme("moonlight forest", 3, new ColorSet("#2C5364", "#203A43", "#0F2027")),
  new ColorTheme("serenity", 3, new ColorSet("#3b8d99", "#6b6b83", "#aa4b6b")),
  new ColorTheme("sahara sky", 4, new ColorSet("#659999", "#f4791f"))
];

let currentTheme: ColorTheme = themes[0];

const SettingModal = () => {
  const { setModalVisible } = useAccessibilityContext()
  const ModalRef = useRef(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedTheme, setSelectedTheme] = useState<ColorTheme>()

  const openModal = (): void => {
    setIsOpen(true)
    setModalVisible(true)
  }

  const closeModal = (): void => {
    setIsOpen(false)
    setModalVisible(false)
  }

  const outsideClick = (e: MouseEvent): void => {
    if (ModalRef.current === e.target) {
      setIsOpen(false)
      setModalVisible(false)
    }
  }

  useEffect((): (() => void) => {
    document.addEventListener('mousedown', outsideClick)
    return () => {
      document.removeEventListener('mousedown', outsideClick)
    }
  }, [])

  useEffect(() => {
    if (selectedTheme) {
      document.documentElement.style.backgroundColor = selectedTheme.fallback
      document.documentElement.style.backgroundImage = selectedTheme.gradient
    } else {
      setSelectedTheme(themes[0])
    }
  }, [selectedTheme])

  const handleThemeChange = (theme: ColorTheme) => {
    currentTheme = theme;
    setSelectedTheme(theme)
  }

  const flipToOppositeTheme = () => {
    DarkModeUtils.switchMode();
    handleThemeChange(currentTheme);
  }

  const darkModeButtonIcon = () => {
    if (DarkModeUtils.darkMode) {
      return  <DarkMode
              onClick={flipToOppositeTheme}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key == ' ' || e.key == 'Enter' || e.key == 'Return') {
                  flipToOppositeTheme()
                }
              }}
              tabIndex={1}
              aria-label="switch mode"
              sx={{ fontSize: '24px', color: ColorCodes.BLACK, float: 'left' }}
              />
    } else {
      return  <DarkModeOutlined
              onClick={flipToOppositeTheme}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key == ' ' || e.key == 'Enter' || e.key == 'Return') {
                  flipToOppositeTheme
                }
              }}
              tabIndex={1}
              aria-label="switch mode"
              sx={{ fontSize: '24px', color: ColorCodes.BLACK, float: 'left' }}
              />
    }
  };

  return (
    <Container>
      <IconButton onClick={openModal}>
        <SettingsOutlined
          aria-label="open settings modal"
          sx={{ fontSize: '24px', color: MuiVariants.NEUTRAL }}
        />
      </IconButton>

      {isOpen && (
        <ModalWrapper ref={ModalRef}>
          <ModalContent>
            <CloseButton
              onClick={closeModal}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key == ' ' || e.key == 'Enter' || e.key == 'Return') {
                  closeModal()
                }
              }}
              tabIndex={0}
              aria-label="close settings modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={selectedTheme?.fallback || '#000'}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </CloseButton>
            <div>
              {darkModeButtonIcon()}
            </div>
            <BackgroundColorWidget>
              <p>Update the background colors:</p>
              <ColorPickerWrapper>
                {themes.map((theme, index) => (
                  <ColorOption
                    key={index}
                    onClick={() => handleThemeChange(theme)}
                    onKeyDown={(e: React.KeyboardEvent) => {
                      if (
                        e.key == ' ' ||
                        e.key == 'Return' ||
                        e.key == 'Enter'
                      ) {
                        handleThemeChange(theme)
                      }
                    }}
                    tabIndex={0}
                    aria-label={theme.name + ' as background'}
                    background={theme.gradient}
                    insideback={
                      theme === selectedTheme ? 'transparent' : 'white'
                    }
                    textcolor={theme === selectedTheme ? 'white' : 'black'}
                  >
                    <div>{theme.name}</div>
                  </ColorOption>
                ))}
              </ColorPickerWrapper>
            </BackgroundColorWidget>
          </ModalContent>
        </ModalWrapper>
      )}
    </Container>
  )
}

export default SettingModal

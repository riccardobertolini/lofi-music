import { enterFullScreen, exitFullScreen } from './FullScreenMode'

describe('Fullscreen function tests', () => {
  beforeEach(() => {
    Object.defineProperty(document, 'fullscreenElement', {
      value: null,
      writable: true,
    })
    Object.defineProperty(document, 'exitFullscreen', {
      value: undefined,
      writable: true,
    })
    Object.defineProperty(document, 'mozCancelFullScreen', {
      value: undefined,
      writable: true,
    })
    Object.defineProperty(document, 'webkitExitFullscreen', {
      value: undefined,
      writable: true,
    })
    Object.defineProperty(document, 'msExitFullscreen', {
      value: undefined,
      writable: true,
    })
    Object.defineProperty(document.documentElement, 'requestFullscreen', {
      value: undefined,
      writable: true,
    })
    Object.defineProperty(document.documentElement, 'webkitRequestFullscreen', {
      value: undefined,
      writable: true,
    })
    Object.defineProperty(document.documentElement, 'mozRequestFullScreen', {
      value: undefined,
      writable: true,
    })
    Object.defineProperty(document.documentElement, 'msRequestFullscreen', {
      value: undefined,
      writable: true,
    })
  })

  it('enterFullScreen function calls the correct browser-specific method', async () => {
    const requestFullscreenMock = jest.fn(() => Promise.resolve())
    Object.defineProperty(document.documentElement, 'requestFullscreen', {
      value: requestFullscreenMock,
    })
    await enterFullScreen()
    expect(requestFullscreenMock).toHaveBeenCalled()
  })

  it('Should return early if document has a fullscreenElement', async () => {
    Object.defineProperty(document, 'fullscreenElement', {
      value: {},
      writable: true,
    })

    const requestFullscreenMock = jest.fn(() => Promise.resolve())
    Object.defineProperty(document.documentElement, 'requestFullscreen', {
      value: requestFullscreenMock,
    })

    await enterFullScreen()

    // Expecting that requestFullscreen was not called, since the function should return early
    expect(requestFullscreenMock).not.toHaveBeenCalled()
  })

  describe('enterFullScreen function with vendor-specific methods', () => {
    it('should call mozRequestFullScreen when it exists', () => {
      const mozRequestFullScreen = jest.fn()
      Object.defineProperty(document.documentElement, 'mozRequestFullScreen', {
        value: mozRequestFullScreen,
      })

      enterFullScreen()
      expect(mozRequestFullScreen).toHaveBeenCalled()
    })

    it('should call webkitRequestFullscreen when it exists and mozRequestFullScreen does not', () => {
      const webkitRequestFullscreen = jest.fn()
      Object.defineProperty(document.documentElement, 'mozRequestFullScreen', {
        value: undefined,
        writable: true,
      })
      Object.defineProperty(
        document.documentElement,
        'webkitRequestFullscreen',
        { value: webkitRequestFullscreen },
      )

      enterFullScreen()
      expect(webkitRequestFullscreen).toHaveBeenCalled()
    })

    it('should call msRequestFullscreen when it exists and the others do not', () => {
      const msRequestFullscreen = jest.fn()
      Object.defineProperty(document.documentElement, 'mozRequestFullScreen', {
        value: undefined,
        writable: true,
      })
      Object.defineProperty(
        document.documentElement,
        'webkitRequestFullscreen',
        { value: undefined, writable: true },
      )
      Object.defineProperty(document.documentElement, 'msRequestFullscreen', {
        value: msRequestFullscreen,
      })

      enterFullScreen()
      expect(msRequestFullscreen).toHaveBeenCalled()
    })
  })

  it('exitFullScreen function calls the correct browser-specific method', async () => {
    const exitFullscreenMock = jest.fn(() => Promise.resolve())

    Object.defineProperty(document, 'exitFullscreen', {
      value: exitFullscreenMock,
    })

    Object.defineProperty(document, 'fullscreenElement', {
      value: {},
      writable: true,
    })

    await exitFullScreen()
    expect(exitFullscreenMock).toHaveBeenCalled()
  })

  describe('exitFullScreen function with vendor-specific methods', () => {
    it('should call mozCancelFullScreen when it exists', () => {
      const mozCancelFullScreen = jest.fn()
      Object.defineProperty(document, 'mozCancelFullScreen', {
        value: mozCancelFullScreen,
      })
      Object.defineProperty(document, 'fullscreenElement', {
        value: {},
        writable: true,
      })

      exitFullScreen()
      expect(mozCancelFullScreen).toHaveBeenCalled()
    })

    it('should call webkitExitFullscreen when it exists and mozCancelFullScreen does not', () => {
      const webkitExitFullscreen = jest.fn()
      Object.defineProperty(document, 'mozCancelFullScreen', {
        value: undefined,
        writable: true,
      })
      Object.defineProperty(document, 'webkitExitFullscreen', {
        value: webkitExitFullscreen,
      })
      Object.defineProperty(document, 'fullscreenElement', {
        value: {},
        writable: true,
      })

      exitFullScreen()
      expect(webkitExitFullscreen).toHaveBeenCalled()
    })

    it('should call msExitFullscreen when it exists and the others do not', () => {
      const msExitFullscreen = jest.fn()
      Object.defineProperty(document, 'mozCancelFullScreen', {
        value: undefined,
        writable: true,
      })
      Object.defineProperty(document, 'webkitExitFullscreen', {
        value: undefined,
        writable: true,
      })
      Object.defineProperty(document, 'msExitFullscreen', {
        value: msExitFullscreen,
      })
      Object.defineProperty(document, 'fullscreenElement', {
        value: {},
        writable: true,
      })

      exitFullScreen()
      expect(msExitFullscreen).toHaveBeenCalled()
    })
  })
})

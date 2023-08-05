export interface FullscreenDocument extends Document {
  fullscreenElement: Element | null
  exitFullscreen: () => Promise<void>
  mozCancelFullScreen: () => Promise<void>
  webkitExitFullscreen: () => Promise<void>
}

interface FullscreenElement extends HTMLElement {
  requestFullscreen: () => Promise<void>
  mozRequestFullScreen: () => Promise<void> // for older versions of Firefox
  webkitRequestFullscreen: () => Promise<void> // for older versions of Chrome and Safari
}

export const enterFullScreen = (): void | null => {
  const docElement = document.documentElement as FullscreenElement

  if ((document as FullscreenDocument).fullscreenElement) {
    return null
  }

  if (docElement.requestFullscreen) {
    docElement.requestFullscreen()
  } else if ((docElement as any).mozRequestFullScreen) {
    ;(docElement as any).mozRequestFullScreen()
  } else if ((docElement as any).webkitRequestFullscreen) {
    ;(docElement as any).webkitRequestFullscreen()
  }
}

export const exitFullScreen = (): void | null => {
  const doc: FullscreenDocument = document as any

  if (!doc.fullscreenElement) {
    return null
  }

  if (doc.exitFullscreen) {
    doc.exitFullscreen()
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen()
  } else if (doc.webkitExitFullscreen) {
    doc.webkitExitFullscreen()
  }
}

export const enterFullScreen = () => {
  const docElement = document.documentElement
  // Stop if It's already in full screen mode
  if (docElement.fullscreenElement) {
    return null
  }

  // Enter full-screen mode
  if (docElement.requestFullscreen) {
    docElement.requestFullscreen()
  } else if (docElement.mozRequestFullScreen) {
    // Firefox
    docElement.mozRequestFullScreen()
  } else if (docElement.webkitRequestFullscreen) {
    // Chrome, Safari, and Opera
    docElement.webkitRequestFullscreen()
  } else if (docElement.msRequestFullscreen) {
    // Internet Explorer/Edge
    document.documentElement.msRequestFullscreen()
  }
}

export const exitFullScreen = () => {
  // Stop if It's not in full screen mode
  if (!document.fullscreenElement) {
    return null
  }

  // Exit full-screen mode
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    // Chrome, Safari, and Opera
    document.webkitExitFullscreen()
  } else if (document.msExitFullscreen) {
    // Internet Explorer/Edge
    document.msExitFullscreen()
  }
}

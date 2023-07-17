interface FullscreenDocument extends Document {
  fullscreenElement: Element | null;
  exitFullscreen: () => Promise<void>;
  mozCancelFullScreen: () => Promise<void>;
  webkitExitFullscreen: () => Promise<void>;
  msExitFullscreen: () => Promise<void>;
}

interface FullscreenElement extends HTMLElement {
  requestFullscreen: () => Promise<void>;
  mozRequestFullScreen: () => Promise<void>;  // for older versions of Firefox
  webkitRequestFullscreen: () => Promise<void>;  // for older versions of Chrome and Safari
  msRequestFullscreen: () => Promise<void>;  // for older versions of IE and Edge
}

export const enterFullScreen = (): void => {
  const docElement = document.documentElement as FullscreenElement;

  if ((document as FullscreenDocument).fullscreenElement) {
    return;
  }

  if (docElement.requestFullscreen) {
    docElement.requestFullscreen();
  } else if ((docElement as any).mozRequestFullScreen) { // as any used to bypass TS errors for non-standard properties
    (docElement as any).mozRequestFullScreen();
  } else if ((docElement as any).webkitRequestFullscreen) {
    (docElement as any).webkitRequestFullscreen();
  } else if ((docElement as any).msRequestFullscreen) {
    (docElement as any).msRequestFullscreen();
  }
}

export const exitFullScreen = (): void => {
  const doc: FullscreenDocument = document as any;

  if (!doc.fullscreenElement) {
    return;
  }

  if (doc.exitFullscreen) {
    doc.exitFullscreen();
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen();
  } else if (doc.webkitExitFullscreen) {
    doc.webkitExitFullscreen();
  } else if (doc.msExitFullscreen) {
    doc.msExitFullscreen();
  }
}

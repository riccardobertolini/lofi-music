import { enterFullScreen, exitFullScreen } from './FullScreenMode';

describe('Fullscreen function tests', () => {
    beforeEach(() => {
        // Reset document.documentElement to its original state
        Object.defineProperty(document, 'exitFullscreen', {value: undefined, writable: true});
        Object.defineProperty(document.documentElement, 'requestFullscreen', {value: undefined, writable: true});
        Object.defineProperty(document.documentElement, 'webkitRequestFullscreen', {value: undefined, writable: true});
        Object.defineProperty(document.documentElement, 'mozRequestFullScreen', {value: undefined, writable: true});
        Object.defineProperty(document.documentElement, 'msRequestFullscreen', {value: undefined, writable: true});
    });

    it('enterFullScreen function calls the correct browser-specific method', async () => {
        const requestFullscreenMock = jest.fn(() => Promise.resolve());
        Object.defineProperty(document.documentElement, 'requestFullscreen', {value: requestFullscreenMock});
        await enterFullScreen();
        expect(requestFullscreenMock).toHaveBeenCalled();
    });

    it('exitFullScreen function calls the correct browser-specific method', async () => {
        const exitFullscreenMock = jest.fn(() => Promise.resolve());

        Object.defineProperty(document, 'exitFullscreen', {value: exitFullscreenMock});

        // set fullscreenElement to simulate full screen mode
        Object.defineProperty(document, 'fullscreenElement', { value: {}, writable: true });

        await exitFullScreen();
        expect(exitFullscreenMock).toHaveBeenCalled();
    });

});

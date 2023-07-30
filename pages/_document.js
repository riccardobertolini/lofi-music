import { Html, Head, Main, NextScript } from "next/document";

import AccessibilityContextProvider from '../contexts/AccessibilityContext'
export default function Document() {
  return (
    <Html lang="en">
      <Head/>

      <AccessibilityContextProvider>
        <body>
          <Main />
          <NextScript />
        </body>
      </AccessibilityContextProvider>
    </Html>
  );
}

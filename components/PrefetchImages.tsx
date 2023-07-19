import Head from 'next/head'
import { PAUSE_IMAGE } from './tilePlayer.style'

const images: string[] = [PAUSE_IMAGE]

export default function PrefetchImages() {
  return (
    <Head>
      {images.map((image, index) => (
        <link
          key={`image-preload-${index}`}
          rel="preload"
          href={image}
          as="image"
        />
      ))}
    </Head>
  )
}

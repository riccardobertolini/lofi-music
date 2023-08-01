import React from 'react'
import { render } from '@testing-library/react'
import PrefetchImages from '../PrefetchImages'
import { PAUSE_IMAGE } from '../TilePlayer.style'

jest.mock('next/head', () => {
  return ({ children }: { children: React.ReactElement }) => {
    return <>{children}</>
  }
})

describe('<PrefetchImages />', () => {
  it('renders the preload links for the images', () => {
    const { container } = render(<PrefetchImages />)

    const preloadLinks = container.querySelectorAll('link[rel="preload"]')
    expect(preloadLinks.length).toBe(1)
    expect(preloadLinks[0].getAttribute('as')).toBe('image')
    expect(preloadLinks[0].getAttribute('href')).toBe(PAUSE_IMAGE)
  })
})

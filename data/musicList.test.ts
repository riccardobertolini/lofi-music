import { musicList } from './musicList'

describe('Music List', () => {
  it('should contain at least one music object', () => {
    expect(musicList.length).toBeGreaterThan(0)
  })

  it('each music object should have an imageSrc and src property', () => {
    musicList.forEach((music) => {
      expect(music).toHaveProperty('imageSrc')
      expect(music).toHaveProperty('src')
    })
  })

  it('imageSrc and src properties should be strings', () => {
    musicList.forEach((music) => {
      expect(typeof music.imageSrc).toBe('string')
      expect(typeof music.src).toBe('string')
    })
  })
})

import { describe, it, expect } from 'vitest'

const add = (a: number, b: number) => a + b

describe('Math Utilities', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5)
  })
})

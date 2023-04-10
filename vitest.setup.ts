import 'vitest-canvas-mock'
import { vi } from 'vitest'
import '@testing-library/jest-dom'
/**
 * Resize observe config for tests with vitest
 */

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}))

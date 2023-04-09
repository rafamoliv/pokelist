import { useState } from 'react'

export const useLocalStorage = <T>(key: string, value: T) => {
  const { localStorage } = window

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return value
    }
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : value
    } catch (error) {
      console.log(error)
      return value
    }
  })

  const setValue = (val: T | ((val: T) => T)) => {
    try {
      const valueToStore = val instanceof Function ? val(storedValue) : val
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue] as const
}

'use client'

import { useRef, useState, useEffect } from 'react'

type UseStorageState<T> = [T, React.Dispatch<React.SetStateAction<T>>]

const useStorageState = <T,>(key: string, initialState: T): UseStorageState<T> => {
  const isMounted = useRef(false)
  const [value, setValue] = useState<T>(initialState)

  useEffect(() => {
    const storedValue = localStorage.getItem(key)
    if (storedValue) {
      setValue(JSON.parse(storedValue))
    }
  }, [key])

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      isMounted.current = true
    }
  }, [value, key])

  return [value, setValue]
}

export { useStorageState }

'use client'

import { useState, useEffect, useCallback } from 'react'

import { AsteroidsType } from '@/app/lib/definitions'
import { formatDateToISO } from '@/app/lib/utils'
import DistanceFilter from '@/app/ui/distance-filter'
import Cart from '@/app/ui/cart'
import AsteroidList from '@/app/ui/asteroid-list'
import Loader from '@/app/ui/loader'
import { useStorageState } from '@/app/lib/hooks/useStorageState'

type AsteroidsProps = {
  initialAsteroids: AsteroidsType
  initialEndDate: string
}

export default function Asteroids({ initialAsteroids, initialEndDate }: AsteroidsProps) {
  const [asteroids, setAsteroids] = useState(initialAsteroids)
  const [currentEndDate, setCurrentEndDate] = useState(new Date(initialEndDate))

  const [distanceUnit, setDistanceUnit] = useStorageState<'km' | 'lunar'>('distanceUnit', 'km')

  const [isLoading, setIsLoading] = useState(false)

  const handleDistanceFilter = (unit: 'km' | 'lunar') => {
    setDistanceUnit(unit)
  }

  const loadMoreAsteroids = useCallback(async () => {
    setIsLoading(true)

    const newStartDate = new Date(currentEndDate)
    const newEndDate = new Date(newStartDate)
    newEndDate.setDate(newEndDate.getDate() + 1)

    const response = await fetch(
      `/api/asteroids?startDate=${formatDateToISO(newStartDate)}&endDate=${formatDateToISO(newEndDate)}`,
    )
    const data = await response.json()

    if (data?.newAsteroids) {
      setAsteroids((prev) => [...prev, ...data.newAsteroids])
      setCurrentEndDate(data.endDate)
    }

    setIsLoading(false)
  }, [currentEndDate])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !isLoading) {
        loadMoreAsteroids()
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLoading, loadMoreAsteroids])

  return (
    <>
      <div>
        <DistanceFilter onDistanceFilter={handleDistanceFilter} distanceUnit={distanceUnit} />
        <AsteroidList distanceUnit={distanceUnit} asteroids={asteroids} />
        {isLoading && <Loader />}
      </div>
      <Cart />
    </>
  )
}

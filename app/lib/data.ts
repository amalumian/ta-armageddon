import { formatDateToISO } from '@/app/lib/utils'
import { API_FEED, API_LOOKUP } from '@/app/lib/api'

export const fetchAsteroids = async (startDate = new Date(), endDate = new Date()) => {
  const formattedStartDate = formatDateToISO(startDate)
  const formattedEndDate = formatDateToISO(endDate)

  const response = await fetch(
    `${API_FEED}&start_date=${formattedStartDate}&end_date=${formattedEndDate}`,
  )
  console.log(response)
  const data = await response.json()

  const asteroidsRaw = data.near_earth_objects
  const newAsteroids = Object.keys(asteroidsRaw).map((date) => ({
    date,
    data: asteroidsRaw[date],
  }))

  return { newAsteroids, startDate: formattedStartDate, endDate: formattedEndDate }
}

export const fetchAsteroid = async (id: string) => {
  const response = await fetch(API_LOOKUP(id))
  const data = await response.json()

  return data
}

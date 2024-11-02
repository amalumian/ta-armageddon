import { NextResponse, NextRequest } from 'next/server'

import { formatDateToISO } from '@/app/lib/utils'
import { API_FEED } from '@/app/lib/api'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')

  if (!startDate || !endDate) {
    return NextResponse.json({ error: 'Invalid date parameters' }, { status: 400 })
  }

  const formattedStartDate = formatDateToISO(new Date(startDate))
  const formattedEndDate = formatDateToISO(new Date(endDate))
  console.log(formattedEndDate)

  const response = await fetch(
    `${API_FEED}&start_date=${formattedStartDate}&end_date=${formattedEndDate}`,
  )
  const data = await response.json()

  if (!data || !data.near_earth_objects) {
    return NextResponse.json({ error: 'Data not found' }, { status: 500 })
  }

  const asteroidsRaw = data.near_earth_objects
  const newAsteroids = Object.keys(asteroidsRaw)
    .map((date) => ({
      date,
      data: asteroidsRaw[date],
    }))
    .reverse()

  return NextResponse.json({
    newAsteroids,
    startDate: formattedStartDate,
    endDate: formattedEndDate,
  })
}

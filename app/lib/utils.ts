export const formatDateToISO = (date: Date): string => {
  return date.toISOString().split('T')[0]
}

export const formatDate = (dateISO: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }
  const date = new Date(dateISO)
  const formattedDate = new Intl.DateTimeFormat('ru-RU', options)
    .format(date)
    .replace(/[.г]/g, '')
    .trim()

  return formattedDate
}

export const getDates = () => {
  const today = new Date()
  const startDate = formatDateToISO(today)

  const nextWeekDay = new Date()
  nextWeekDay.setDate(today.getDate() + 7)
  const endDate = formatDateToISO(nextWeekDay)

  return { startDate, endDate }
}

export const { startDate, endDate } = getDates()

export const formatDistanceInKm = (distance: string): string => {
  const distanceNumber = parseInt(distance, 10)
  const roundedDistance = Math.round(distanceNumber)
  const formattedDistance = roundedDistance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return `${formattedDistance} км`
}

export const formatDistanceInLunar = (distance: string): string => {
  const distanceNumber = parseInt(distance, 10)
  const roundedDistance = Math.round(distanceNumber)
  const formattedDistance = roundedDistance.toString()

  return `${formattedDistance} лунных орбит`
}

export const formatDiameterInM = (diameter: number): string => {
  const roundedDiameter = Math.round(diameter)
  const formattedDiameter = roundedDiameter.toString()

  return `${formattedDiameter} м`
}

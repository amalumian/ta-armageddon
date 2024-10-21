import { startDate, endDate } from './utils'

export const API_KEY = process.env.API_KEY
export const API_FEED = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`
export const API_LOOKUP = (id: string): string =>
  ` https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`

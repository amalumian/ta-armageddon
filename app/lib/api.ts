export const API_KEY = process.env.API_KEY
export const API_FEED = `https://api.nasa.gov/neo/rest/v1/feed?api_key=${API_KEY}`
export const API_LOOKUP = (id: string): string =>
  ` https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`

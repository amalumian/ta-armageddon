import Asteroids from './ui/asteroids'
import { fetchAsteroids } from './lib/data'

export default async function Page() {
  const { newAsteroids: initialAsteroids, endDate } = await fetchAsteroids()

  return (
    <>
      <h2>Ближайшие подлёты астероидов</h2>
      <Asteroids
        initialAsteroids={initialAsteroids}
        initialEndDate={endDate}
      />
    </>
  )
}

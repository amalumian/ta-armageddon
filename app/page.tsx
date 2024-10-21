import Asteroids from './ui/asteroids'
import { fetchAsteroids } from './lib/data'

export default async function Page() {
  const { asteroids } = await fetchAsteroids()

  return (
    <>
      <h2>Ближайшие подлёты астероидов</h2>
      <Asteroids asteroids={asteroids} />
    </>
  )
}

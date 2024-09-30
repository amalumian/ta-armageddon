import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../lib/context/cart-context';

type AsteroidItemProps = {
  date: string;
  distance: string;
  id: string;
  diameter: string;
  isHazardous: boolean;
  name: string;
};

export default function AsteroidItem({
  date,
  distance,
  id,
  diameter,
  isHazardous,
  name,
}: AsteroidItemProps) {
  const { cart, handleCart } = useCart();

  return (
    <div>
      <h3>{date}</h3>
      <div>{distance}</div>
      <div>---------</div>
      <Image
        src="/asteroid.webp"
        width="37"
        height="40"
        alt="Asteroid"
        priority
      />
      <Link href={`/${id}`}>{name}</Link>
      <div>Ø {diameter}</div>
      <button
        onClick={() =>
          handleCart({
            date,
            distance,
            id,
            diameter,
            isHazardous,
            name,
          })
        }
      >
        {cart.some((cartAsteroid) => cartAsteroid.id === id)
          ? 'В корзине'
          : 'Заказать'}
      </button>
      {isHazardous && <div>⚠️ Опасен</div>}
    </div>
  );
}

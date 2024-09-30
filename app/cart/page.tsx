'use client';

import Link from 'next/link';
import { useCart } from '../lib/context/cart-context';
import Image from 'next/image';
import { useEffect,useState } from 'react';

export default function Page() {
  const { cart, clearCart } = useCart();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [copyCart, setCopyCart] = useState(cart);

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Заказ отправлен!</h2>
      {copyCart.map((asteroid) => (
        <div key={asteroid.id}>
          <h3>{asteroid.date}</h3>
          <div>{asteroid.distance}</div>
          <div>---------</div>
          <Image
            src="/asteroid.webp"
            width="37"
            height="40"
            alt="Asteroid"
            priority
          />
          <Link href={`/${asteroid.id}`}>{asteroid.name}</Link>
          <div>Ø {asteroid.diameter}</div>
          {asteroid.isHazardous && <div>⚠️ Опасен</div>}
        </div>
      ))}
    </>
  );
}

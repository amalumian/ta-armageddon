'use client';

import React, { createContext, useContext, useState } from 'react';

type CartAsteroidType = {
  date: string;
  distance: string;
  id: string;
  diameter: string;
  isHazardous: boolean;
  name: string;
};

type CartContextType = {
  cart: CartAsteroidType[];
  handleCart: (asteroid: CartAsteroidType) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartAsteroidType[]>([]);

  const handleCart = (asteroid: CartAsteroidType) => {
    const hasAsteroid = cart.find(
      (cartAsteroid) => cartAsteroid.id === asteroid.id,
    );

    if (hasAsteroid) {
      const filteredCart = cart.filter(
        (cartAsteroid) => cartAsteroid.id !== asteroid.id,
      );
      setCart(filteredCart);
    } else {
      setCart((prevState) => [...prevState, asteroid]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, handleCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

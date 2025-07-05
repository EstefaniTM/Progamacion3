import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  addItem: (p0: { id: number; name: string; }) => {},
  removeItem: (id: any) => {}
});
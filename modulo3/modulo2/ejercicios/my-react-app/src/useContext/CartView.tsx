import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export default function CartView() {
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  const { items, addItem, removeItem } = cartContext;

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {items.map(item => (
          <li key={(item as any).id}>
            {(item as any).name} <button onClick={() => removeItem((item as any).id)}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem({ id: Date.now(), name: 'Nuevo producto' })}>Agregar producto</button>
    </div>
  );
}
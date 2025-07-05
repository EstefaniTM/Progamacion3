import { useState } from 'react';

export default function ColorBox() {
  const [color, setColor] = useState('Red');

  return (
    <>
      <div style={{ width: 100, height: 100, backgroundColor: color }}></div>
      <button onClick={() => setColor('salmon')}>Cambiar color</button>
    </>
  );
}
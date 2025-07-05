
import { useState, useEffect } from 'react';

export default function DocumentTitleChanger() {
  const [title, setTitle] = useState('React App');
  const [input, setInput] = useState('');
  const [title2, setTitle2] = useState('React App');
  const [input2, setInput2] = useState('');

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    document.title = title2;
  }, [title2]);


  const updateTitle = () => {
    if (input.trim()) {
      setTitle(input);
      setInput('');
    }
  };

  const updateTitle2 = () => {
    if (input2.trim()) {
      setTitle2(input2);
      setInput2('');
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nuevo título"
      />
      <button onClick={updateTitle}>Actualizar título</button>
      <p>Título actual: {title}</p>

      <input
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Nuevo título 2"
      />
      <button onClick={updateTitle2}>Actualizar título 2</button>
      <p>Título actual 2: {title2}</p>
    </div>
  );

  //enves de dos publicacipnes aparescan 4


}

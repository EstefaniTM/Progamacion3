import React from 'react';

// Import components from DaisyUI and TailwindCSS
import { DaisyCard } from './daisy/TargetaDaiosy';
import { DaisyButton } from './daisy/ButtonDaisy';
import { DaisyModal } from './daisy/DaisyModal';
import { DaisyCarrusel } from './daisy/DaisyCarrusel'; // Uncomment if you want to use the carousel
import { DaisyButtonGlobo } from './daisy/DaisyButtonGlobo';
import { DaisyColumn } from './daisy/DaisyColumn';


export default function App() {
  return (
    <>
      <DaisyButton />
      <DaisyCard />
      <DaisyModal />
      <DaisyCarrusel />
      <DaisyButtonGlobo />
      <DaisyColumn/>
    </>
  );
}
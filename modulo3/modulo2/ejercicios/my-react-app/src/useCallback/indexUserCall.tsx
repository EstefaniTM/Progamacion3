import Contador from './Contador';
import ListaCallback from './ListaCallback';


export default function IndexUseState() {
  return (
    <div className="app">
      <h1>Demos de Hooks</h1>
        <Contador />
        <ListaCallback items={[]} />
        
    </div>
  );
}

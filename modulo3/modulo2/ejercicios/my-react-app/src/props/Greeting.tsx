export default function Greeting(props) {
  return <h2>Hola, {props.name}</h2>;
}

function App() {
  return (
    <>
      <Greeting name="Francisco" />
      <Greeting name="Ana" />
    </>
  );
}
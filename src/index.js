import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Counter() {

  const [contador, setContador] = useState(0);

  return <div>
    <h1>Counter: {contador}</h1>
    <button onClick={() => {
      setContador(contador + 1)
    }}>
      Aumentar
    </button>
    <button onClick={() => {
      setContador(contador - 1)
    }}>
      Disminuir
    </button>
    <button onClick={() => {
      setContador(0)
    }}>
      Reiniciar
    </button>
  </div>
}


root.render(<>
  <Counter></Counter>
</>);
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Counter() {

  const [mensaje, setMensaje] = useState('');
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("render");
  }, [contador])

  return <div>
    <input onChange={(e)=> {
      setMensaje(e.target.value);
    }}></input>
    <button onClick={()=>{
      alert("el mensaje es " + mensaje);
    }}>Alerta</button>
    <hr></hr>
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
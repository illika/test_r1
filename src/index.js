import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function saludo() {
  return <h1>Hola mundo - Funcion Saludo</h1>;
}

const Componente2 = () => {
  return <h2>Hola mundo - Componente2 </h2>;
}

root.render(<div>
  {saludo()}
  <Componente2></Componente2>
</div>);
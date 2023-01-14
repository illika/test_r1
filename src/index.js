import React from 'react';
import ReactDOM from 'react-dom/client';

import { Saludo } from './Saludo';
import Product, { Campo } from './Product';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Componente2 = () => {
  return <h2>Hola mundo - Componente2 </h2>;
}

root.render(<>
  {[
    Saludo(), 
    <Campo />
  ]}
  <Componente2></Componente2>
  <Product></Product>
</>);
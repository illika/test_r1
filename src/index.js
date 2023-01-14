import React from 'react';
import ReactDOM from 'react-dom/client';

import { Saludo, UserCard } from './Saludo';
import Product, { Campo } from './Product';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Componente2 = () => {
  return <h2>Hola mundo - Componente2 </h2>;
}

root.render(<>
  <UserCard 
  name="illika"
  amount={30} 
  points={[1,2,3,2]}
  estado={true}
  address = {{calle: 'Jr. 168', ciudad: 'Trujillo'}}
  gret={function() {alert("Hola")}}
  />

</>);
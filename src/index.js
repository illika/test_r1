import React from 'react';
import ReactDOM from 'react-dom/client';

import { Saludo, UserCard } from './Saludo';
import Product, { Campo } from './Product';
import {Button} from './Button';
import {TaskCard} from './Task';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Componente2 = () => {
  return <h2>Hola mundo - Componente2 </h2>;
}

root.render(<>
  <TaskCard ready={true}></TaskCard>
</>);
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Saludo, UserCard } from './Saludo';
import Product, { Campo } from './Product';
import {Button} from './Button';
import {TaskCard} from './Task';

import { Welcome } from './Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Componente2 = () => {
  return <h2>Hola mundo - Componente2 </h2>;
}

const handleChange = (e) => {
  console.log(e.target.value)
}

root.render(<>
  <TaskCard ready={true}></TaskCard>
  <Welcome></Welcome>
  <Button text="Saludar"></Button>
  <input onChange={handleChange}></input>
</>);
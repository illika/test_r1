import React from 'react';
import ReactDOM from 'react-dom/client';

import { Posts } from './Posts';

const root = ReactDOM.createRoot(document.getElementById('root'));

const user = [
  {
    id: 1,
    name: 'John',
    image: 'https://robohash.org/user1'
  },
  {
    id: 2,
    name: 'Juan',
    image: 'https://robohash.org/user2'
  }
]

root.render(<>
  {user.map((item, index) => {
    return <div key={index}>
      <p>{item.id} - {item.name}</p>
      <img src={item.image}></img>
    </div>
  })}
</>);
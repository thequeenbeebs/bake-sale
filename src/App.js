import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(resp => resp.json())
      .then(data => setItems(data))
  })
  return (
    <div className="App">
      Bake Sale
      <ul>
        {items.map(item => <img src={item.img}></img>)}
      </ul>
    </div>
  );
}

export default App;

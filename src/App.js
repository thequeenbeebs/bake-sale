import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(resp => resp.json())
      .then(data => setItems(data))
  })
  return (
    <div className="App">
      <NavBar />
      <ul>
        {items.map(item => <img src={item.img}></img>)}
      </ul>
    </div>
  );
}

export default App;

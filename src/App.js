import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import ItemsContainer from './components/ItemsContainer'

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
      <ItemsContainer items={items}/>
    </div>
  );
}

export default App;

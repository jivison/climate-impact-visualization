import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/ShoppingList'
import Map from './components/Map'

function App() {
  return (
    <div className="App">
      <ShoppingList ></ShoppingList>
      <Map></Map>
    </div>
  );
}

export default App;

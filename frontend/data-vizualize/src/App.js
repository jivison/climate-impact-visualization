import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/ShoppingList'
import Chart from './components/Chart'

function App() {
  return (
    <div className="App">
      <ShoppingList ></ShoppingList>
      <Chart></Chart>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map'
import Header from './components/Header'
import Description from './components/Description'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Map></Map>
      <Description></Description>
    </div>
  );
}

export default App;

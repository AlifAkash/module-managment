import React, {createContext, useState} from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Shipment from './Component/Shipment/Shipment';

export const categoryContext = createContext();

function App() {
  const [category, setCategory] = useState("laptop");
  return (
    <div className="App">
      <categoryContext.Provider value={[category, setCategory]}>
        <p>Count Value: {category}</p>
        <Header></Header>
        <Home></Home>
        <Shipment></Shipment>
      </categoryContext.Provider>
    </div>
  );
}

export default App;

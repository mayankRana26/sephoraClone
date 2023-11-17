// App.js
import React from 'react';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import {Route,Routes} from "react-router-dom"
import HomePage from './pages/HomePage';
import Header from './components/Header';
import FaceFoundationProducts from './pages/FaceFoundationProducts';
import MoisturizersProducts from './pages/MoisturizersProduct'

function App() {
  return (
    <div className="App">
      
      
      <Routes>
      <Route exact path='/' element={<HomePage/>}></Route>

        <Route exact path='/makeup-foundation-products' element={<FaceFoundationProducts/>}></Route>
        <Route exact path='/Moisturizers-products' element={<MoisturizersProducts/>}></Route>

      </Routes>
      
    
    </div>
  );
}

export default App;

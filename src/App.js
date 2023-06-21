import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Personal from './components/Personal/Personal';
import Bussiness from './components/Bussiness/Bussiness';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/personal' element={<Personal/>}/>
          <Route path='/bussiness' element={<Bussiness/>} />
        </Routes>
      </BrowserRouter>      
    );
  }
}

export default App;

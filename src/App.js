import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Personal from './components/Personal/Personal';
import Company from './components/Company/Company';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/personal' element={<Personal/>}/>
          <Route path='/company' element={<Company/>} />
        </Routes>
      </BrowserRouter>      
    );
  }
}

export default App;

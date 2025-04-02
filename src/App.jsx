import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './HeaderHome';
import MainHome from './MainHome';
import HeaderHome from './HeaderHome';
import Jogos from './Jogos';
import Loja from './Loja';
import Sobre from './Sobre';
import Contato from './Contato';

function App() {

  return (
      <Router>
          <div className='App'>
            <HeaderHome />

            <Routes>
              <Route path='/' element={<MainHome />} />
              <Route path='/Jogos' element={<Jogos />} />
              <Route path='/Loja' element={<Loja />} />
              <Route path='/Sobre' element={<Sobre />} />
              <Route path='/Contato' element={<Contato/>} />
            </Routes>

          </div>
      </Router>
  );
}

export default App

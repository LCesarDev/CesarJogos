import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import HeaderHome from './Header.jsx';
import Jogos from './Jogos.jsx';
import Loja from './Loja.jsx';
import Sobre from './Sobre.jsx';
import Contato from './Contato.jsx';
import Footer from './Footer.jsx';

function App() {

  return (
      <Router>
             
        
          <div className='App'>
       
            <HeaderHome/>

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Jogos' element={<Jogos />} />
              <Route path='/Loja' element={<Loja />} />
              <Route path='/Sobre' element={<Sobre />} />
              <Route path='/Contato' element={<Contato/>} />
            </Routes>

            <Footer/>

          </div>
          
      </Router>
  );
}

export default App

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login/login.jsx';
import Cadastro from './pages/cadastro/cadastro.jsx';
import AddDiario from './pages/add/add.jsx';
import AltDiario from './pages/alt/alt.jsx';
import DelDiario from './pages/del/del.jsx';
import GetDiario from './pages/get/get.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/add' element={<AddDiario />} />
        <Route path='/alt' element={<AltDiario />} />
        <Route path='/del' element={<DelDiario />} />
        <Route path='/get' element={<GetDiario />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


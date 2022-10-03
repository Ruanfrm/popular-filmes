import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './global.css';
import Index from './pages/home/Index';
import Details from './../src/pages/datails/index';
import Series from './pages/serie/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/serie/:id" element={<Series/>}/>



    </Routes>
  </BrowserRouter>

);
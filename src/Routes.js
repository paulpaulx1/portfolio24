import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Code from './components/Tech';
import Art from './components/Art';
import Experience from './components/Experience';
import SingleArt from './components/SingleArt';
import { Contact } from './components/Contact';
import { Nothing } from './components/Nothing'


export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Nothing />} />
    <Route path='/about' element={<Home />} />
    <Route path='/tech' element={<Code />} />
    <Route path='/art' element={<Art />} />
    <Route path='/exp' element={<Experience />} />
    <Route path='/art/:id' element={<SingleArt />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
);

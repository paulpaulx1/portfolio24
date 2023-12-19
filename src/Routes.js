import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Code from './components/Code';
import Art from './components/Art';
import Experience from './components/Experience';
import SingleArt from './components/SingleArt';
import Contact from './components/Contact';

export const AppRoutes = () => (
  <Routes>
    <Route path='/'  element={<Home />}/>
    <Route path='/about' element={<Home />} />
    <Route path='/tech' element={<Code />} />
    <Route path='/art' element={<Art />} />
    <Route path='/exp' element={<Experience />} />
    <Route path='/art/:id' element={<SingleArt />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
);

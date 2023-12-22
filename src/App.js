import React from 'react';
import Navbar from './components/Navbar';
import { AppRoutes } from './Routes';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom'


import { nanoid } from 'nanoid';

const App = () => {
  const theGoods = window.location.href.match(/[^/]+$/)
  ? ['about', 'tech', 'art', 'exp', 'contact'].filter(
      (word) => word !== window.location.href.match(/[^/]+$/)[0]
    )
  : ['about', 'tech', 'art', 'exp', 'contact'];

  const headerMap = theGoods.map(function(descTitle, i){
    const node = <Header key={nanoid()} 
    slideDir={i % 2 === 0 ? 'slide__left' : 'slide__right'} 
    title={descTitle}></Header>
    return node
  })

  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      {headerMap}
      </BrowserRouter>
    </div>
  );
};

export default App;

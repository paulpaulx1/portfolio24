import React from 'react';
import Navbar from './components/Navbar';
import { AppRoutes } from './Routes';
import { Header } from './components/Header';
import { BrowserRouter, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const path = location.pathname;

  // Define your route-specific tabs
  const tabs = [
    { path: '/about', title: 'about' },
    { path: '/tech', title: 'tech' },
    { path: '/art', title: 'art' },
    { path: '/exp', title: 'exp' },
    { path: '/contact', title: 'contact' },
  ];

  // Filter tabs based on the current route
  const filteredTabs = tabs.filter((tab) => path !== tab.path);

  return (
    <div>
        <Navbar />
        <AppRoutes />
        {filteredTabs.map((tab) => (
          <Header key={tab.path} title={tab.title} />
        ))}
    </div>
  );
};

export default App;
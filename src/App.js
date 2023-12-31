import React from "react";
import Navbar from "./components/Nametag";
import { AppRoutes } from "./Routes";
import { Header } from "./components/Header";
import { useLocation } from "react-router-dom";
import { nanoid } from 'nanoid'


const App = () => {
  const location = useLocation();
  const path = location.pathname;

  const tabs = [
    { path: "/about", title: "about" },
    { path: "/tech", title: "tech" },
    { path: "/art", title: "art" },
    { path: "/exp", title: "exp" },
    { path: "/contact", title: "contact" },
  ];

  const filteredTabs = tabs.filter((tab) => path !== tab.path);

  return (
    <div>
        <Navbar />
        <AppRoutes />
        {filteredTabs.map((tab, i) => (
          <Header
            key={nanoid()}
            title={tab.title}
            slideDir={i % 2 === 0 ? "slide__left" : "slide__right"}
          />
        ))}
    </div>
  );
};

export default App;

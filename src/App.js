import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbars from "./componets/Navbar";
import Layout from "./componets/Layout/Layout";
import Coindetails from "./componets/Layout/Coindetails";
import { contextdata } from "./config/Context";
import { CoinList } from "./config/api";

const App = () => {
  const [apiData, setApiData] = useState();

  const fechingApiData = async () => {
    const res = await fetch(CoinList);
    const data = await res.json();
    setApiData(data);
  };

  useEffect(() => {
    fechingApiData();
  }, []);

  return (
    <contextdata.Provider value={{ apiData, setApiData }}>
      <div className="w-100vw h-100v overflow-x-hidden scroll-smooth relative">
        <div className="fixed left-0 z-10 w-[100%]">
          <Navbars />
        </div>

        <div className="flex flex-1 mt-20">
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/coin/:id" element={<Coindetails />} />
          </Routes>
        </div>
      </div>
    </contextdata.Provider>
  );
};

export default App;

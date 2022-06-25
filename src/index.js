import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/root';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MotorPage from './components/menu-page/Motor';
import Caravan from './components/menu-page/Caravan';
import Tuning from './components/menu-page/Tuning';
import UsedCar from './components/menu-page/UsedCar';
import CampingPalces from './components/menu-page/CampingPlaces';
import Navbar from './components/navbar/navbar';
import Profil from './components/menu-page/profil';
import Cart from './components/menu-page/cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      {/* <Route path="/" element={<Root />} /> */}
      <Route path="/" element={<MotorPage />} />
      <Route path="/caravan" element={<Caravan />} />
      <Route path="/tuning" element={<Tuning />} />
      <Route path="/used-car" element={<UsedCar />} />
      <Route path="/camping-places" element={<CampingPalces />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>

);



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import CategoryPage from "./pages/CategoryPage";
import DestinationPage from "./pages/DestinationPage";
import OfferDetailPage from "./pages/OfferDetailPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyAppointments from "./pages/MyAppointments";
import TourDetail from "./pages/TourDetail";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Rruga për secilën kategori */}
        <Route path="/categories/:slug" element={<CategoryPage />} />
        <Route path="/destination/:code" element={<DestinationPage />} />
        <Route path="/offers/:slug" element={<OfferDetailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/tours/:id" element={<TourDetail />} />
      </Routes>
    </Router>
  );
}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import CategoryPage from "./pages/CategoryPage";
import DestinationPage from "./pages/DestinationPage";
import OfferDetailPage from "./pages/OfferDetailPage";

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
      </Routes>
    </Router>
  );
}
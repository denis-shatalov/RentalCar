import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout'
import MainPage from "./pages/MainPage/MainPage"
import CatalogPage from './pages/CatalogPage/CatalogPage'
import CarDetailsPage from './pages/CarDetailsPage/CarDetailsPage'
import './App.css'

function App() {

  return (
      <div>
       <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CarDetailsPage />} />
      </Route>
    </Routes>
      </div>
   
  )
}

export default App

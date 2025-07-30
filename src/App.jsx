import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import MainPage from "./pages/MainPage/MainPage";
import CatalogPage from './pages/CatalogPage/CatalogPage';
import CarDetailsPage from './pages/CarDetailsPage/CarDetailsPage';
import './App.css';

function App() {
  const [theme, setTheme] = useState("light"); // состояние темы

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }
  }, []);

  // функция переключения темы с сохранением в localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={theme}>
      <Routes>
        <Route path="/" element={<Layout toggleTheme={toggleTheme} theme={theme} />}>
          <Route index element={<MainPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CarDetailsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

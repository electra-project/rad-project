import './App.css';
import "./styles.css";
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes,Route} from 'react-router-dom' 
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div>
        <Navbar theme={theme} onThemeSwitch={handleThemeSwitch}/>
        <Routes>
          <Route path='/' element = {<Shop />} />
          <Route path='/mens' element = {<ShopCategory banner={men_banner} category="men"/>} />
          <Route path='/women' element = {<ShopCategory banner={women_banner} category="women"/>} />
          <Route path='/kids' element = {<ShopCategory banner={kids_banner} category="kid"/>} />
          <Route path='product' element={<Product/>}>
            <Route path='/product/:productid' element={<Product />}/>
          </Route>
          <Route path='/cart' element = {<Cart />} />
          <Route path='/login' element = {<LoginSignUp />} />
        </ Routes>
      <Footer />
    </div>
  );
}

export default App;

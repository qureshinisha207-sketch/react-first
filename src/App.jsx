import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home";
import { Product } from "./pages/product";
import {Categories} from "./pages/categories"
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { ProductDetail } from "./pages/productDetailPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route path="/category" element={<Categories/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
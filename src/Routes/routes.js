import React from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/login";
import Registration from "../Pages/Registration/registration";
import Products from "../Pages/Products/products";
import Header from "../Components/Header";
import Profile from "../Pages/Profile/profile";

let router = createBrowserRouter(Routes, { basename: "/shoppingCart" })

const Router = () => {
  return (
    
    <BrowserRouter basename={router}>
    < Header />
      <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

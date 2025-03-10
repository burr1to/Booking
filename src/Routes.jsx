import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Hotel from "./pages/Individual/Hotel";
import List from "./pages/List/List";
import Footer from "./components/Layout/Footer";

const Routedpath = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/hotels' element={<List />}></Route>
      <Route path='/hotels/:id' element={<Hotel />}></Route>
      <Route path='/test' element={<Footer />}></Route>
    </Routes>
  );
};

export default Routedpath;

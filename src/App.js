import React from 'react';

import Home from './pages/Home';
import Post from './pages/Post';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blogs/:blogId' element={ <Post />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

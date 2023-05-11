import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Searchmovie from './pages/Searchmovie';
import Popular from './pages/popular'
import Searchtv from './pages/Searchtv';
import Homepage from './pages/homepage';
import AppHeader from './Layouts/Apppheadr';
function App() {
  return (
    <div className="App">
        <AppHeader/>

      <Routes>
      <Route exact path="/" element={<Homepage />}  ></Route>

        <Route exact path="/search" element={<Searchmovie />}  ></Route>
        <Route exact path="/tv" element={<Searchtv />}  ></Route>

        <Route exact path="/popular" element={<Popular />}  ></Route>
      </Routes>
    </div>
  );
}

export default App;
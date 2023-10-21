import "./style/App.css";
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Game from "./components/game";
import Instruction from './components/instruction';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/instructions" element={<Instruction />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


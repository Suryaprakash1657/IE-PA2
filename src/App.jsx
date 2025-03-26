
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Addmovie from './components/Addmovie';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Addmovie" element={<Addmovie/>}/>
      </Routes>
  );
};

export default App;

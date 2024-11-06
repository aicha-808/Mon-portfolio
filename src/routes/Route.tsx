// src/routes/routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About'; 
import Layout from '../layout/Layout';


const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout children={undefined} />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;

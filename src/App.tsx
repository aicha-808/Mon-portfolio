import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';
import RoutesComponent from './routes/Route';

// Déclare le type des props, même s'il n'y en a pas pour l'instant
const App: React.FC = () => {
  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
}

export default App;

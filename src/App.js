import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Routes} from './routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <RouterProvider router={Routes} />
    </div>
  );
}

export default App;

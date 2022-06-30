import React from 'react';
import ReactDOM from 'react-dom/client';
import { PokeApp } from './PokeApp';
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokeApp />
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 style={{justifyContent:"center",display:'flex',margin:"2%",flexDirection:'row',textTransform:'uppercase',fontSize:"1 rem"}}>calculator</h1>
    <App />
  </React.StrictMode>
);
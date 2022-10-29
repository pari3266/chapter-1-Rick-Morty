import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// StrictMode is a tool for highlighting 
// potential problems in an application. 
// Like Fragment, StrictMode does not render 
// any visible UI. It activates additional checks 
// and warnings for its descendants.

// Strict mode checks are run in development mode only; 
// they do not impact the production build.

// You can enable strict mode for any part of your application
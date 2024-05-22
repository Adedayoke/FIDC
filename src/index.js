import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthUserContextProvider } from './Context/AuthUserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthUserContextProvider>
      <App />
    </AuthUserContextProvider>
  </React.StrictMode>
);

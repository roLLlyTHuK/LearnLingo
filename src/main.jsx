import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import GlobalStyles from './rootStyles.js';
import { AuthProvider } from './context/AuthContext.jsx';
import './firebase.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/learn-lingo/">
      <AuthProvider>
        <GlobalStyles />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

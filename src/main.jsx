import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';
import './styles/main.css';
import './styles/light-theme.css';
import './styles/dark-theme.css';
import './styles/responsive.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

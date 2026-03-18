import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import faviconUrl from './images/favicon.ico';

// Garante que o favicon funcione tanto em dev quanto no build (Vite resolve o asset).
const faviconLink = document.querySelector('link[rel="icon"]');
if (faviconLink) {
  faviconLink.href = faviconUrl;
} else {
  const linkEl = document.createElement('link');
  linkEl.rel = 'icon';
  linkEl.type = 'image/x-icon';
  linkEl.href = faviconUrl;
  document.head.appendChild(linkEl);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

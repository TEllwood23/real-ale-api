import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Tailwind styles
import App from './App'; // The root component of your app

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App.jsx';

import { createRoot } from 'react-dom/client';

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />)
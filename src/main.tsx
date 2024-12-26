import './assets/styles/reset.scss';
import './assets/styles/globals.scss';
import './assets/styles/style.scss';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './routes';
import ReactDOM from 'react-dom/client';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AppRouter/>
  </BrowserRouter>
);

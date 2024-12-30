import './assets/styles/reset.scss';
import './assets/styles/globals.scss';
import './assets/styles/style.scss';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './routes';
import ReactDOM from 'react-dom/client';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './shared/lib/redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    </BrowserRouter>
  </ThemeProvider>,
);

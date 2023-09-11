import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MUIThemeProvider from './components/MUIThemeProvider/MUIThemeProvider';
import { store } from './store';

import "@fontsource/montserrat";
import "@fontsource/montserrat/100-italic.css";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200-italic.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300-italic.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400-italic.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500-italic.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600-italic.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700-italic.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800-italic.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900-italic.css";
import "@fontsource/montserrat/900.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MUIThemeProvider>
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MUIThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

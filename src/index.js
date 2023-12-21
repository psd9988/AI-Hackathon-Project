import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext.js';
import { UserDataContextProvider } from './contexts/UserDataContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserDataContextProvider>
  <UserContextProvider>
  <BrowserRouter>
  <React.StrictMode>
    <App />
    <ToastContainer position="top-right" autoClose={3000} />
  </React.StrictMode>
  </BrowserRouter>
  </UserContextProvider>
  </UserDataContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

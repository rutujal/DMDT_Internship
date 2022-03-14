import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ContextProvider} from "../src/context/Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <>
    <ContextProvider>
    <App />
    </ContextProvider>
    
  </>,
  document.getElementById('root')
);


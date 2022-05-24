import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';

import reportWebVitals from './reportWebVitals';
import { config } from './overmind';
import './i18n';
import './index.scss';

import App from './App';

const overmind = createOvermind(config);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider value={overmind}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

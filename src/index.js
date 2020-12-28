import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './assets/styles/globalStyle'
import 'antd/dist/antd.css'
import Routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

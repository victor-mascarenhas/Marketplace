import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './assets/styles/globalStyle'
import 'antd/dist/antd.css'
import Routes from './routes'
import { Provider } from 'react-redux'
import store from './store'
import Toastr from './config/toastr'

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <Routes/>
    <Toastr/>
  </Provider>,
  document.getElementById('root')
);

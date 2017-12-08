const css = require('./app.css');

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header';
ReactDOM.render(
  <div>
    <Header appname="Morph" />
  </div>,
  document.getElementById('root')
);

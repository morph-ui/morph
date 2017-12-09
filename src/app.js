require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

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

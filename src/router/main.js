import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Home from '../page/home';
import Button from '../page/button';
import Input from '../page/input';

export default class RouterMain extends React.Component {
  render() {
    return (
      <div>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/component/button" component={Button} />
            <Route path="/component/input" component={Input} />
          </div>
      </div>
    )
  }
}

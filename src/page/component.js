import React from 'react';
import { Route } from 'react-router-dom';
import Nav from '../component/nav';
import Button from '../page/button';
import Input from '../page/input';
import Grid from '../page/grid';
import Table from '../page/table';
import Header from '../page/header';
import First from '../page/first';

export default class Component extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="two columns padding-5">
            <Nav position="fixed"/>
          </div>
          <div className="ten no-margin columns padding-5">
            <Route exact path={`${this.props.match.url}`} component={First} />
            <Route path={`${this.props.match.url}/button`} component={Button} />
            <Route path={`${this.props.match.url}/input`} component={Input} />
            <Route path={`${this.props.match.url}/grid`} component={Grid} />
            <Route path={`${this.props.match.url}/table`} component={Table} />
            <Route path={`${this.props.match.url}/header`} component={Header} />
          </div>
        </div>
      </div>
    )
  }
}

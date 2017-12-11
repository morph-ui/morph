import React from 'react';
import RouterMain from '../router/main';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {

  processNavOptions () {
    return(
      this.props.options.map((option, index)=>{
        return(
          <NavLink key={index} to={`${ option.url }`}
            activeClassName="selected">
              { option.name }
          </NavLink>
        )
      })
    )
  }

  render() {

    return (
      <div>
      <div className="row">
        <div className="two columns padding-5">
          <nav className={`${ this.props.position } ${ this.props.color  }`}>
            { this.processNavOptions() }
          </nav>
        </div>
        <div className="ten no-margin columns padding-5">

        </div>
      </div>
      </div>
    )
  }
}

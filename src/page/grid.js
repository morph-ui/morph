import React from 'react';

export default class Grid extends React.Component {
  render() {
    return (
      <div>
        <h3>Sistema de grilla</h3>
        <div className="gray-color padding-10">
            <div className="row">
              <div className="one column white-color padding-5 margin-10">One</div>
              <div className="eleven columns white-color padding-5 margin-10">Eleven</div>
            </div>
            <div className="row">
              <div className="two columns white-color padding-5 margin-10">Two</div>
              <div className="ten columns white-color padding-5 margin-10">Ten</div>
            </div>
            <div className="row">
              <div className="three columns white-color padding-5 margin-10">Three</div>
              <div className="nine columns white-color padding-5 margin-10">Nine</div>
            </div>
            <div className="row">
              <div className="four columns white-color padding-5 margin-10">Four</div>
              <div className="eight columns white-color padding-5 margin-10">Eight</div>
            </div>
            <div className="row">
              <div className="five columns white-color padding-5 margin-10">Five</div>
              <div className="seven columns white-color padding-5 margin-10">Seven</div>
            </div>
            <div className="row">
              <div className="six columns white-color padding-5 margin-10">Six</div>
              <div className="six columns white-color padding-5 margin-10">Six</div>
            </div>
            <div className="row">
              <div className="seven columns white-color padding-5 margin-10">Seven</div>
              <div className="five columns white-color padding-5 margin-10">Five</div>
            </div>
            <div className="row">
              <div className="eight columns white-color padding-5 margin-10">Eight</div>
              <div className="four  columns white-color padding-5 margin-10">Four</div>
            </div>
            <div className="row">
              <div className="nine columns white-color padding-5 margin-10">Nine</div>
              <div className="three columns white-color padding-5 margin-10">Three</div>
            </div>
            <div className="row">
              <div className="ten columns white-color padding-5 margin-10">Ten</div>
              <div className="two columns white-color padding-5 margin-10">Two</div>
            </div>
            <div className="row">
              <div className="eleven columns white-color padding-5 margin-10">Eleven</div>
              <div className="one column white-color padding-5 margin-10">One</div>
            </div>
          </div>
      </div>
    )
  }
}

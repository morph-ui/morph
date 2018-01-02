import React from 'react';

export default class Table extends React.Component {
  render() {
    return (
      <div>
        <h1>Tabla</h1>

        <div className="row">
          <div className="ten columns">
            <h3>Tabla simple</h3>

            <iframe width="100%"
              height="300"
              src="//jsfiddle.net/techfano/8zvke4uo/embedded/result,html/"
              frameBorder="0">
            </iframe>

          </div>
        </div>

        <div className="row">
          <div className="ten columns">
            <h3>Tabla con (strip-horizontal)</h3>

            <iframe width="100%"
              height="300"
              src="//jsfiddle.net/techfano/8jmnr6rr/embedded/result,html/"
              frameBorder="0">
            </iframe>

          </div>
        </div>

        <div className="row">
          <div className="ten columns">
            <h3>Tabla con (strip-vertical)</h3>

            <iframe width="100%"
              height="300"
              src="//jsfiddle.net/techfano/k0s5nma6/embedded/result,html/"
              frameBorder="0">
            </iframe>

          </div>
        </div>

        <div className="row">
          <div className="ten columns">
            <h3>Tabla (expandida y con strip-horizontal)</h3>

            <iframe width="100%"
              height="300"
              src="//jsfiddle.net/techfano/3c0k600c/embedded/result,html/"
              frameBorder="0">
            </iframe>

          </div>
        </div>

        <div className="row">
          <div className="ten columns">
            <h3>Tabla (expandida y con strip-horizontal) con cabeceras (center, right, left)</h3>

            <iframe width="100%"
              height="300"
              src="//jsfiddle.net/techfano/sv40pksL/embedded/result,html/"
              frameBorder="0">
            </iframe>

          </div>
        </div>

        <div className="row">
          <div className="ten columns">
            <h3>Tabla (expandida y con strip-horizontal) con cabeceras y contenido (center, right, left)</h3>

            <iframe width="100%"
              height="300"
              src="//jsfiddle.net/techfano/Lvq2k2sx/embedded/result,html/"
              frameBorder="0">
            </iframe>

          </div>
        </div>


      </div>
    )
  }
}

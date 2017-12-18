import React from 'react';

export default class Input extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="ten columns">
            <h1>Cajas de texto</h1>

            <iframe width="100%"
              height="500"
              src="//jsfiddle.net/techfano/r2f6qy1t/embedded/result,html/"
              allowpaymentrequest
              allowfullscreen="allowfullscreen"
              frameborder="0">
            </iframe>

          </div>
        </div>

        <div className="row">
          <div className="ten columns">
            <h1>Cajas de texto con boton (.input-box)</h1>

            <iframe width="100%"
              height="300"
              src="//jsfiddle.net/techfano/ov6mo8Lg/embedded/result,html/"
              allowpaymentrequest
              allowfullscreen="allowfullscreen"
              frameborder="0">
            </iframe>

          </div>
        </div>

        <div className="row">
          <div className="ten columns">
            <h1>Cajas de texto con boton redondeado (.input-box .rounded)</h1>

            <iframe width="100%"
              height="300"
              src="//jsfiddle.net/techfano/funks8gL/embedded/result,html/"
              allowpaymentrequest
              allowfullscreen="allowfullscreen"
              frameborder="0">
            </iframe>

          </div>
        </div>

      </div>
    )
  }
}

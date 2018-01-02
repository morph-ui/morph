import React from 'react';
import packageJson from '../../package.json';

export default class CardPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Tarjeta</h1>
        <h3>Tarjeta simple con imagen</h3>
        <iframe
          width="100%"
          height="400"
          src="//jsfiddle.net/techfano/wzv6bwxj/embedded/result,html/"
          frameBorder="0">
        </iframe>
        <h3>Tarjeta simple con video de youtube en iframe</h3>
        <iframe
          width="100%"
          height="550"
          src="//jsfiddle.net/techfano/t5faof3L/embedded/result,html/"
          frameborder="0">
        </iframe>
        <h3>Tarjeta con cabecera, imagen, controles y caja de botones sociales</h3>
        <iframe
          width="100%"
          height="600"
          src="//jsfiddle.net/techfano/6bpfjo0n/embedded/result,html/"
          frameBorder="0">
        </iframe>
        <h3>Tarjeta con cabecera, video de youtube en iframe, controles y caja de botones sociales</h3>
        <iframe
          width="100%"
          height="700"
          src="//jsfiddle.net/techfano/jma08aya/embedded/result,html/"
          frameBorder="0">
        </iframe>
      </div>
    )
  }
}

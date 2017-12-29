import React from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';

export default class Grid extends React.Component {
  render() {
    return (
      <div>
        <h1>Sistema de grilla</h1>
        <div className="row">
          <div className="nine columns">
            <p>El sistema de grilla está basado en un esquema de 12 columnas con clases <strong>CSS </strong>
            que están nombradas simplemente con la nomenclatura de números y columnas en inglés (one, two, three..., twelve) y
            una clase (column o columns de acuerdo a la cantidad de columnas)
            </p>
            <iframe width="100%"
              height="590"
              src="//jsfiddle.net/techfano/19yju8dr/embedded/result,html,css/"
              frameBorder="0">
            </iframe>
          </div>
        </div>

      </div>
    )
  }
}

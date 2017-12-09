import React from 'react';
import packageJson from '../../package.json';
import {UnControlled as CodeMirror} from 'react-codemirror2';

export default class Installation extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Instalación simple
        </h2>
        <div className="row">
          <div className="nine columns">
            <p>
              1. <a className="button green rounded"
                href={`https://morph.pe/zip/morph-${ packageJson.version }.zip`} download>
                Descargar morph v{packageJson.version} aquí
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="nine columns">
            <h4>
              2. Luego de descargar, descomprime el zip
            </h4>
            <img src="https://image.ibb.co/d8v87w/Descomprimir.png" />
          </div>
        </div>
        <div className="row">
          <div className="nine columns">
            <h4>
              3. Una vez descomprimido, copia el folder "dist" en tu proyecto
            </h4>
            <img src="https://image.ibb.co/gUUAnw/Proyecto1.png" />
          </div>
        </div>
        <div className="row">
          <div className="nine columns">
            <h4>
              4. Finalmente inserta el archivo morph-x.css en tu proyecto a través de la etiqueta link
            </h4>
            <img src="https://image.ibb.co/mrGefG/Proyecto2.png" />
          </div>
        </div>
        <div className="row">
          <div className="nine columns">
            <h4>
              Por ejemplo:
            </h4>
            <CodeMirror
              value='<head>
                <meta charset="utf-8" />
                <title></title>
                <link rel="stylesheet" href="dist/morph-[version].css" />
              </head>'
              options={{
                mode: 'xml',
                theme: 'material',
                lineNumbers: true,
                readOnly: true
              }}
              onChange={(editor, data, value) => {
              }}
            />
          </div>
        </div>

      </div>
    )
  }
}

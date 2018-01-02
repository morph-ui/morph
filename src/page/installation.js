import React from 'react';
import packageJson from '../../package.json';

export default class Installation extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Instalación simple
        </h1>
        <div className="row">
          <div className="nine columns">
            <p>
              1. <a href={`https://morph.pe/zip/morph-${ packageJson.version }.zip`} download>
                Descargar morph v{packageJson.version} aquí
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="nine columns">
            <h4>
              2. Luego de descargar descomprime el archivo en formato zip
            </h4>
            <img src="https://image.ibb.co/d8v87w/Descomprimir.png" />
          </div>
        </div>
        <div className="row">
          <div className="nine columns">
            <h4>
              3. Una vez descomprimido procede a copiar la carpeta "dist" en tu proyecto
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
      </div>
    )
  }
}

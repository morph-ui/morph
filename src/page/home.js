import React from 'react';
import packageJson from '../../package.json';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <p>
          <img src="https://image.ibb.co/dOceFG/morph_logo_mini_fw.png" alt="" />
        </p>
        <h1>
          ¿Qué es morph?
        </h1>
        <div className="row font-18">
          <div className="nine columns">
            Morph es una colección de patrones para crear Interfaces Gráficas de
            Usuario <strong>(GUI - Graphic User Interface)</strong> de la manera más sencilla posible.
          </div>
        </div>
        <br/>
        <div className="row font-18">
          <div className="nine columns">
            Ha sido creado usando sólo <strong>HTML</strong> y con un mínimo de clases <strong>CSS</strong>.
            Asimismo, se abstrae en el nombre de las clases de estilos <strong>CSS</strong> con una semántica
            que hace referencia a un lenguaje natural de acuerdo a lo que se quiere hacer o usar.
          </div>
        </div>
        <div className="row font-18">
          <div className="eight columns">
            <b>Finalmente todo ello permite mejorar la experiencia del diseñador, programador y del usuario.</b>
          </div>
        </div>
        <p className="font-18">
          <a className="button black rounded"
            href="https://github.com/techfano/morph"
            target="_blank">
            Github
          </a>
        </p>
        <p className="font-18 padding-top-5">
          <a className="button green rounded"
            href={`https://morph.pe/zip/morph-${ packageJson.version }.zip`} download>
            Descargar v{packageJson.version}
          </a>
        </p>
        <hr/>
        <h1>Fundamentos sobre Morph</h1>
        <h2>1. Minimalismo</h2>
        <div className="row font-18">
          <div className="eight columns padding-5 margin-10">
            Morph usa minimalismo como una prioridad para crear interfaces en su mínima expresión de diseño, detalles y elementos para incrementar eficiencia.
          </div>
        </div>
        <h2>2. Formas</h2>
        <div className="row font-18">
          <div className="eight columns padding-5 margin-10">
            Sólo formas geométricas básicas como cuadrados, círculos y sus características derivadas.
          </div>
        </div>
      </div>
    )
  }
}

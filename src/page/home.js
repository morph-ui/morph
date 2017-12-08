import React from 'react';
import packageJson from '../../package.json';

console.log(packageJson.version);

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <p>
          <img src="https://image.ibb.co/iqOQ7F/morph_logo_mini_fw.png" alt="" />
        </p>
        <h1>
          ¿Que es morph?
        </h1>
        <div className="row font-18">
          <div className="eight columns padding-5 margin-10">
            Morph es una colección de Patrones de Diseño Web
            que sirven para crear Interfaces Grafícas de Usuario (GUI) lo más fácíl posible.
            Las cuales, han sido creadas usando solamente HTML con un mínimo de clases CSS.
            Asi mismo, se abstrae en el nombre de las clases de estilos CSS una semántica que
            hace referencia a un lenguaje natural de acuerdo a lo que se quiere hacer o usar.
          </div>
          <div className="four columns padding-5 margin-10"></div>
        </div>
        <div className="row font-18">
          <div className="eight columns padding-5 margin-10">
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
        <p className="font-18">
          <a className="button green rounded"
            href={`https://morph.pe/zip/morph-${ packageJson.version }`} download>
            Descargar v{packageJson.version}
          </a>
        </p>
        <hr/>
        <h1>Fundamentos sobre Morph</h1>
        <h3>1. Minimalismo</h3>
        <div className="row font-18">
          <div className="eight columns padding-5 margin-10">
            Morph usa minimalismo como una prioridad para crear interfaces en su minima expresion de diseño
            en detalles y elementos e incrementar eficiencia.
          </div>
        </div>
        <h3>2. Formas</h3>
        <div className="row font-18">
          <div className="eight columns padding-5 margin-10">
            Solo formas geometricas basicas como cuadrados, circulos y sus caracteristicas derivadas.
          </div>
        </div>
      </div>
    )
  }
}

import React from 'react';

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
      <p className="font-18">
        Morph es una colección de Patrones de Diseño Web
        que sirven para crear Interfaces Grafícas de Usuario (GUI) lo más fácíl posible.
        Las cuales, han sido creadas usando solamente HTML con un mínimo de clases CSS.
        Asi mismo, se abstrae en el nombre de las clases de estilos CSS una semántica que
        hace referencia a un lenguaje natural de acuerdo a lo que se quiere hacer o usar.
        <b>Finalmente todo ello permite mejorar la experiencia del diseñador, programador y del usuario.</b>
      </p>
      <p className="font-18">
        <a href="https://github.com/techfano/morph">
          Github
        </a>
      </p>
      <p className="font-18">
        <a href="https://morph-60313.firebaseapp.com/zip/morph-1.5.9.zip" download>
          Descargar v1.5.9
        </a>
      </p>
      </div>
    )
  }
}

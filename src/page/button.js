import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <div>
        <h3>Botones</h3>
        <p>
          <button>
            Boton
          </button>
          <button type="button" disabled={true}>
            Boton deshabiltado
          </button>
          <button type="button" className="red">
            Boton rojo
          </button>
          <button type="button" className="black">
            Boton negro
          </button>
          <button type="button" className="blue">
            Boton azul
          </button>

          <button type="button" className="yellow">
            Boton amarillo
          </button>

          <button type="button" className="green">
            Boton verde
          </button>
        </p>
        <hr />
        <br />
        <h3>Botones con iconos</h3>
        <p>
          <button type="button">
            <span className="icon done_black"></span>
            Boton con icono
          </button>
          <button type="button" className="red">
            <span className="icon add_white"></span>
            Boton rojo con icono
          </button>

          <button type="button" className="red" disabled={true}>
            <span className="icon add_white"></span>
            Boton rojo con icono deshabilitado
          </button>

          <button type="button" className="black">
            <span className="icon clear_white"></span>
            Boton negro con icono
          </button>

          <button type="button" className="blue">
            <span className="icon chat_white"></span>
            Boton azul con icono
          </button>

          <button type="button" className="yellow">
            <span className="icon error_black"></span>
            Boton azul con icono
          </button>

          <button type="button" className="green">
            <span className="icon favorite_white"></span>
            Boton verde con icono
          </button>
        </p>
        <hr />
        <br />
        <h3>Botones redondeados</h3>
        <p>
          <button type="button" className="rounded">
            Boton redondeado
          </button>
          <button type="button" className="rounded red">
            Boton redondeado rojo
          </button>
          <button type="button" className="rounded black">
            Boton redondeado negro
          </button>
          <button type="button" className="rounded black" disabled={true}>
            Boton redondeado negro deshabilitado
          </button>
          <button type="button" className="rounded blue">
            Boton redondeado azul
          </button>

          <button type="button" className="rounded yellow">
            Boton redondeado amarillo
          </button>
          <button type="button" className="rounded green">
            Boton redondeado verde
          </button>
        </p>
        <hr />
        <br />
        <h3>Botones redondeados con iconos</h3>
        <p>
          <button type="button" className="rounded">
            <span className="icon done_black"></span>
            Boton redondeado con icono
          </button>

          <button type="button" className="rounded red">
            <span className="icon add_white"></span>
            Boton rojo redondeado con icono
          </button>
          <button type="button" className="rounded black">
            <span className="icon clear_white"></span>
            Boton negro redondeado con icono
          </button>
          <button type="button" className="rounded blue">
            <span className="icon chat_white"></span>
            Boton azul redondeado con icono
          </button>
          <button type="button" className="rounded blue" disabled={true}>
            <span className="icon chat_white"></span>
            Boton azul redondeado con icono deshabilitado
          </button>
          <button type="button" className="rounded yellow">
            <span className="icon error_black"></span>
            Boton yellow redondeado con icono
          </button>
          <button type="button" className="rounded green">
            <span className="icon favorite_white"></span>
            Boton green redondeado con icono
          </button>
        </p>
        <hr />
        <br />
        <h3>Botones circulares</h3>
        <p>
          <button type="button" className="circle">
            <span className="icon done_black"></span>
          </button>

          <button type="button" className="circle red">
            <span className="icon add_white"></span>
          </button>

          <button type="button" className="circle black">
            <span className="icon clear_white"></span>
          </button>

          <button type="button" className="circle blue">
            <span className="icon chat_white"></span>
          </button>

          <button type="button" className="circle yellow">
            <span className="icon error_black"></span>
          </button>

          <button type="button" className="circle yellow" disabled={true}>
            <span className="icon error_black"></span>
          </button>

          <button type="button" className="circle green">
            <span className="icon favorite_white"></span>
          </button>
        </p>
        <hr />
        <br />
        <h3>Botones cuadrados</h3>
        <p>
          <button type="button" className="square">
            <span className="icon done_black"></span>
          </button>

          <button type="button" className="square red">
            <span className="icon add_white"></span>
          </button>

          <button type="button" className="square black">
            <span className="icon clear_white"></span>
          </button>

          <button type="button" className="square blue">
            <span className="icon chat_white"></span>
          </button>

          <button type="button" className="square yellow">
            <span className="icon error_black"></span>
          </button>

          <button type="button" className="square yellow" disabled={true}>
            <span className="icon error_black"></span>
          </button>

          <button type="button" className="square green">
            <span className="icon favorite_white"></span>
          </button>
        </p>
      </div>
    )
  }
}

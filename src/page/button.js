import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <div>

      <p>
        <h3>Botones</h3>
      </p>
      <p>
        <button>
          Boton
        </button>
        <button type="button" disabled="">
          Boton deshabiltado
        </button>
        <button type="button" class="red">
          Boton rojo
        </button>
        <button type="button" class="black">
          Boton negro
        </button>
        <button type="button" class="blue">
          Boton azul
        </button>

        <button type="button" class="yellow">
          Boton amarillo
        </button>

        <button type="button" class="green">
          Boton verde
        </button>
      </p>
    <hr />
    <br />
    <p>
      <h3>Botones con iconos</h3>
    </p>
    <p>
      <button type="button">
        <span class="icon done_black"></span>
        Boton con icono
      </button>
      <button type="button" class="red">
        <span class="icon add_white"></span>
        Boton rojo con icono
      </button>

      <button type="button" class="red" disabled="">
        <span class="icon add_white"></span>
        Boton rojo con icono deshabilitado
      </button>

      <button type="button" class="black">
        <span class="icon clear_white"></span>
        Boton negro con icono
      </button>

      <button type="button" class="blue">
        <span class="icon chat_white"></span>
        Boton azul con icono
      </button>

      <button type="button" class="yellow">
        <span class="icon error_black"></span>
        Boton azul con icono
      </button>

      <button type="button" class="green">
        <span class="icon favorite_white"></span>
        Boton verde con icono
      </button>
    </p>
    <hr />
    <br />
    <p>
      <h3>Botones redondeados</h3>
    </p>
    <p>
      <button type="button" class="rounded">
        Boton redondeado
      </button>
      <button type="button" class="rounded red">
        Boton redondeado rojo
      </button>
      <button type="button" class="rounded black">
        Boton redondeado negro
      </button>
      <button type="button" class="rounded black" disabled="">
        Boton redondeado negro deshabilitado
      </button>
      <button type="button" class="rounded blue">
        Boton redondeado azul
      </button>

      <button type="button" class="rounded yellow">
        Boton redondeado amarillo
      </button>
      <button type="button" class="rounded green">
        Boton redondeado verde
      </button>
    </p>
    <hr />
    <br />
    <p>
      <h3>Botones redondeados con iconos</h3>
    </p>
    <p>
      <button type="button" class="rounded">
        <span class="icon done_black"></span>
        Boton redondeado con icono
      </button>

      <button type="button" class="rounded red">
        <span class="icon add_white"></span>
        Boton rojo redondeado con icono
      </button>
      <button type="button" class="rounded black">
        <span class="icon clear_white"></span>
        Boton negro redondeado con icono
      </button>
      <button type="button" class="rounded blue">
        <span class="icon chat_white"></span>
        Boton azul redondeado con icono
      </button>
      <button type="button" class="rounded blue" disabled="">
        <span class="icon chat_white"></span>
        Boton azul redondeado con icono deshabilitado
      </button>
      <button type="button" class="rounded yellow">
        <span class="icon error_black"></span>
        Boton yellow redondeado con icono
      </button>
      <button type="button" class="rounded green">
        <span class="icon favorite_white"></span>
        Boton green redondeado con icono
      </button>
    </p>
    <hr />
    <br />
    <p>
      <h3>Botones circulares</h3>
    </p>
    <p>
      <button type="button" class="circle">
        <span class="icon done_black"></span>
      </button>

      <button type="button" class="circle red">
        <span class="icon add_white"></span>
      </button>

      <button type="button" class="circle black">
        <span class="icon clear_white"></span>
      </button>

      <button type="button" class="circle blue">
        <span class="icon chat_white"></span>
      </button>

      <button type="button" class="circle yellow">
        <span class="icon error_black"></span>
      </button>

      <button type="button" class="circle yellow" disabled="">
        <span class="icon error_black"></span>
      </button>

      <button type="button" class="circle green">
        <span class="icon favorite_white"></span>
      </button>
    </p>
    <hr />
    <br />
    <p>
      <h3>Botones cuadrados</h3>
    </p>
    <p>
      <button type="button" class="square">
        <span class="icon done_black"></span>
      </button>

      <button type="button" class="square red">
        <span class="icon add_white"></span>
      </button>

      <button type="button" class="square black">
        <span class="icon clear_white"></span>
      </button>

      <button type="button" class="square blue">
        <span class="icon chat_white"></span>
      </button>

      <button type="button" class="square yellow">
        <span class="icon error_black"></span>
      </button>

      <button type="button" class="square yellow" disabled="">
        <span class="icon error_black"></span>
      </button>

      <button type="button" class="square green">
        <span class="icon favorite_white"></span>
      </button>
    </p>

      </div>
    )
  }
}

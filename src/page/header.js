import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h3>Cabeceras con opciones a la izquierda</h3>
        <header className="margin-5">
          <div className="brand">
            Morph
          </div>
          <div className="option left">
            <a href="#">
              Clientes
            </a>
          </div>
          <div className="option left">
            <a href="#">
              Usuarios
            </a>
          </div>
          <div className="option left selected">
            <a href="#">
              Productos
            </a>
          </div>
        </header>
        <header className="margin-5 gray">
          <div className="brand">
            Morph
          </div>
          <div className="option left">
            <a href="#">
              Clientes
            </a>
          </div>
          <div className="option left">
            <a href="#">
              Usuarios
            </a>
          </div>
          <div className="option left selected">
            <a href="#">
              Productos
            </a>
          </div>
        </header>
        <header className="margin-5 yellow">
          <div className="brand">
            Morph
          </div>
          <div className="option left">
            <a href="#">
              Clientes
            </a>
          </div>
          <div className="option left">
            <a href="#">
              Usuarios
            </a>
          </div>
          <div className="option left selected">
            <a href="#">
              Productos
            </a>
          </div>
        </header>
        <header className="margin-5 red">
          <div className="brand">
            Morph
          </div>
          <div className="option left">
            <a href="#">
              Clientes
            </a>
          </div>
          <div className="option left">
            <a href="#">
              Usuarios
            </a>
          </div>
          <div className="option left selected">
            <a href="#">
              Productos
            </a>
          </div>
        </header>
        <header className="margin-5 green">
          <div className="brand">
            Morph
          </div>
          <div className="option left">
            <a href="#">
              Clientes
            </a>
          </div>
          <div className="option left">
            <a href="#">
              Usuarios
            </a>
          </div>
          <div className="option left selected">
            <a href="#">
              Productos
            </a>
          </div>
        </header>
        <header className="margin-5 blue">
          <a href="#" className="brand">
            Morph
          </a>
          <a className="option left">
            Clientes
          </a>
          <a className="option left">
            Usuarios
          </a>
          <a className="option left selected">
            Productos
          </a>
        </header>
        <div className="header margin-5 black">
          <div className="brand">
            Morph
          </div>
          <div className="option left">
            <a href="#">
              Clientes
            </a>
          </div>
          <div className="option left">
            <a href="#">
              Usuarios
            </a>
          </div>
          <div className="option left selected">
            <a href="#">
              Productos
            </a>
          </div>
        </div>
        <h3>Cabecera con opciones a la derecha</h3>
        <div className="header margin-5 red">
          <div className="brand">
            Morph
          </div>
          <div className="option right">
            <a href="#">
              Clientes
            </a>
          </div>
          <div className="option right">
            <a href="#">
              Usuarios
            </a>
          </div>
          <div className="option right selected">
            <a href="#">
              Productos
            </a>
          </div>
        </div>
        <h3>Cabecera con botones de accion</h3>
        <header className="margin-5 black">
          <div className="action left icon menu_white">
          </div>
          <div className="brand">
            Morph
          </div>
          <div className="option left">
            <a href="#">
              Clientes
            </a>
          </div>
          <div className="option left">
            <a href="#">
              Usuarios
            </a>
          </div>
          <div className="option left selected">
            <a href="#">
              Productos
            </a>
          </div>
          <div className="action right icon more_vert_white">
          </div>
        </header>
        <h3>Cabeceras con menus y botones de acción</h3>
        <header className="green">
          <ul className="menu right">
            <li>
              <a href="#">
                Menu right
              </a>
            </li>
            <li>
              <a href="#">
                Menu right 2
              </a>
            </li>
          </ul>
          <div className="action left icon menu_white">
          </div>
          <div className="action right icon more_vert_white">
          </div>
          <ul className="menu left">
            <li>
              <a href="#"
                className="selected">
                Menu left
              </a>
            </li>
            <li>
              <a href="#">
                Menu left 2
              </a>
            </li>
          </ul>
          <div className="brand">
            Morph
          </div>
        </header>
        <br/>
        <br/>
        <br/>
        <br/>
        <h4>Código</h4>
        <p>Puedes usar la etiqueta header</p>
        <code>
          &lt;header&gt;
            &lt;div class="brand"&gt;
              Morph
            &lt;/div&gt;
          &lt;/header&gt;
          <br />
          <br />
          &lt;header class="gray"&gt;
            &lt;div class="brand"&gt;
              Morph
            &lt;/div&gt;
          &lt;/header&gt;
          <br />
          <br />
          &lt;header class="yellow"&gt;
            &lt;div class="brand"&gt;
              Morph
            &lt;/div&gt;
          &lt;/header&gt;
          <br />
          <br />
          &lt;header class="red"&gt;
            &lt;div class="brand"&gt;
              Morph
            &lt;/div&gt;
          &lt;/header&gt;
          <br />
          <br />
          &lt;header class="green"&gt;
            &lt;div class="brand"&gt;
              Morph
            &lt;/div&gt;
          &lt;/header&gt;
          <br />
          <br />
          &lt;header class="blue"&gt;
            &lt;div class="brand"&gt;
              Morph
            &lt;/div&gt;
          &lt;/header&gt;
          <br />
          <br />
          &lt;header class="black"&gt;
            &lt;div class="brand"&gt;
              Morph
            &lt;/div&gt;
          &lt;/header&gt;
        </code>
        <br />
        <p>Tambien declarar la clase de estilo
           <span className="grafite-color padding-2">.header</span>
           o junto con colores (<span className="grafite-color padding-2 red-text">.red</span>,
             <span className="grafite-color padding-2 blue-text"> .blue</span>, etc)</p>
        <code>
          &lt;div class="header black"&gt;
            &lt;div class="brand"&gt;
              Morph
            &lt;/div&gt;
          &lt;/div&gt;
        </code>
        <br />
        <p>
          Asi mismo, ponerle la clase
          <span className="grafite-color padding-2">.absolute</span>
          y ponerla en la parte superior de toda la pantalla o la clase
          <span className="grafite-color padding-2">.fixed</span> y fijarla.
        </p>
        <code>
          &lt;header class="black absolute"&gt;
            &lt;div class="brand"&gt;
              Morph
            &lt;/div&gt;
          &lt;/header&gt;
          <br/>
          <br/>
          &lt;div class="header black absolute"&gt;
            &lt;div class="brand"&gt;
              Morph
            &lt;/div&gt;
          &lt;/div&gt;
        </code>
      </div>
    )
  }
}

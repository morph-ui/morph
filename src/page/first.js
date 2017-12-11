import React from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';

export default class First extends React.Component {
  render() {
    return (
      <div>
        <h1>¿Como usar mi primer componente?</h1>
        <div className="row">
          <div className="nine columns font-18">
            Una vez instalado Morph la mayoría de los elementos <strong>HTML</strong> usaran los
            estilos <strong>CSS</strong> predefinidos.<br/> Pero para ciertos colores o características
            deseadas se deben manejar y editar algunas clases y elementos como mostraremos a continuación:
          </div>
        </div>

        <h2>Ahora haremos una cabecera con opciones de navegación</h2>

        <div className="row">
          <div className="nine columns">
            <h3>
            1. Crea primero la etiqueta header
            </h3>
            <CodeMirror
              value='<header>
              </header>'
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

        <div className="row">
          <div className="nine columns">
            <h3>
            2. Puedes posicionarla en la parte superior de tu página con dos clases (absolute, fixed) La segunda es en caso quieres que la cabecera sea fija.
            </h3>
            <CodeMirror
              value='<header class="fixed">
              </header>'
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

        <div className="row">
          <div className="nine columns">
            <h3>
              3. También puedes agregar el nombre del proyecto con la clase "brand" con una etiqueta "div" dentro del "header".
            </h3>
            <CodeMirror
              value='<header class="fixed">
              <div class="brand">
              Proyecto
              </div>
              </header>'
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

        <div className="row">
          <div className="nine columns">
            <h4>
              El cual se verá así por defecto
            </h4>
            <header className="margin-bottom-10">
              <div className="brand">
              Proyecto
              </div>
            </header>
          </div>
        </div>

        <div className="row">
          <div className="nine columns">
            <h3>
              4. Para añadir las opciones de navegación deberás agregar dentro del "header" un "div" con las clases "option" y "left" o "right" para indicar la dirección donde se posicionará cada opción.
            </h3>
            <CodeMirror
              value='<header class="fixed">
              <div class="brand">
              Proyecto
              </div>
              <div class="option left">
              <a href="">
              Opcion 1
              </a>
              </div>
              </header>'
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

        <div className="row">
          <div className="nine columns">
            <h4>
              El cual se verá así por defecto
            </h4>
            <header>
              <div className="brand">
                Proyecto
              </div>
              <div className="option left">
                <a href="">
                  Opcion 1
                  </a>
              </div>
            </header>
          </div>
        </div>

        <div className="row">
          <div className="nine columns">
            <h3>
              5. Para programarle más énfasis de estado o indicar la selección de alguna opción deberás añadir a cualquier opción la clase "selected".
            </h3>
            <CodeMirror
              value='<header class="fixed">
              <div class="brand">
              Proyecto
              </div>
              <div class="option left">
              <a href="">
              Opcion 1
              </a>
              </div>
              <div class="option left selected">
              <a href="">
              Opcion 2
              </a>
              </div>
              </header>'
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

        <div className="row">
          <div className="nine columns">
            <h4>
              El cual se verá así por defecto
            </h4>
            <header>
              <div className="brand">
                Proyecto
              </div>
              <div className="option left">
                <a href="">
                  Opcion 1
                </a>
              </div>
              <div className="option left selected">
                <a href="">
                  Opcion 2
                </a>
              </div>
            </header>
          </div>
        </div>

        <div className="row">
          <div className="nine columns">
            <h3>
              6. Si deseas cambiar de color a la cabecera deberás añadir las clases (red, blue, yellow, green, black, gray).
            </h3>
            <div>Por ejemplo, cambiaremos a rojo:</div>
            <CodeMirror
              value='<header class="fixed red">
              <div class="brand">
              Proyecto
              </div>
              <div class="option left">
              <a href="">
              Opcion 1
              </a>
              </div>
              <div class="option left selected">
              <a href="">
              Opcion 2
              </a>
              </div>
              </header>'
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

        <div className="row">
          <div className="nine columns">
            <h4>
              El cual se verá así por defecto
            </h4>
            <header className="red">
              <div className="brand">
                Proyecto
              </div>
              <div className="option left">
                <a href="">
                  Opcion 1
                </a>
              </div>
              <div className="option left selected">
                <a href="">
                  Opcion 2
                </a>
              </div>
            </header>
          </div>
        </div>

        <div className="row">
          <div className="nine columns">
            <h4>
              Y listo! Así ya tienes los elementos necesarios para crear y programar una cabecera con opciones de navegación.
            </h4>
            <ul>
              <li>
                Ejemplo en vivo <a href="https://jsfiddle.net/techfano/4doxss7p" target="_blank">jsfiddle</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

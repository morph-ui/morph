import React from 'react';
import First from '../page/first';
import Nav from '../component/nav';
import {UnControlled as CodeMirror} from 'react-codemirror2';

const navOptions = [{
    url:'#',
    name: 'Opción 1'
  },{
    url:'/componentes/nav',
    name: 'Opción 2'
  },{
    url:'#',
    name: 'Opción 3'
  }
]

export default class NavPage extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <h2>Componente de navegación</h2>
        </div>
        <div className="row">
          <div className="two columns">
            <Nav position="absolute"
            color=""
            options={navOptions} />
          </div>
          <div className="ten columns">
            <CodeMirror
              value='<nav>
                <a href="#">Opcion1</a>
                <a href="#">Opcion2</a>
                <a href="#" class="selected">Opcion3</a>
                <a href="#">Opcion4</a>
              </nav>'
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
          <h4>Cambemos de color (red, yellow, green, blue, black, gray), por ejemplo a Rojo (red)</h4>
        </div>
        <div className="row">
          <div className="two columns">
            <Nav position="absolute"
            color="red"
            options={navOptions} />
          </div>
          <div className="ten columns">
            <CodeMirror
              value='<nav class="red">
                <a href="#">Opcion1</a>
                <a href="#">Opcion2</a>
                <a href="#" class="selected">Opcion3</a>
                <a href="#">Opcion4</a>
              </nav>'
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
          <h4>Si deseas mantenerlo fijo solo debes añadir la clase (fixed)</h4>
        </div>
        <div className="row">
          <div className="two columns">
            <Nav position="absolute"
            color="black"
            options={navOptions} />
          </div>
          <div className="ten columns">
            <CodeMirror
              value='<nav class="black fixed">
                <a href="#">Opcion1</a>
                <a href="#">Opcion2</a>
                <a href="#" class="selected">Opcion3</a>
                <a href="#">Opcion4</a>
              </nav>'
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

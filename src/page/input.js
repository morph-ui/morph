import React from 'react';

export default class Input extends React.Component {
  render() {
    return (
      <div>
        <h3>Cajas de texto</h3>
        <p>
          <label>Cajas de texto</label>
          <input type="text" name="" defaultValue="" placeholder="Input" />

          <label>Cajas de texto roja</label>
          <input type="text" name="" defaultValue="" placeholder="Input red" className="red" />

          <label>Cajas de texto negra</label>
          <input type="text" name="" defaultValue="" placeholder="Input black" className="black" />

          <label>Cajas de texto azul</label>
          <input type="text" name="" defaultValue="" placeholder="Input blue" className="blue" />

          <label>Cajas de texto amarillo</label>
          <input type="text" name="" defaultValue="" placeholder="Input yellow" className="yellow" />

          <label>Cajas de texto verde</label>
          <input type="text" name="" defaultValue="" placeholder="Input green" className="green" />
        </p>
        <hr/>
        <br/>
        <h3>Cajas de texto con botoones (.input-box)</h3>
        <div className="input-box">
          <input type="text" />
          <button type="button">Buscar</button>
        </div>
        <div className="input-box">
          <input type="text" />
          <button type="button" name="button" className="rounded">Buscar</button>
        </div>
        <div className="input-box">
          <input type="text" />
          <button type="button" name="button" className="rounded red">Buscar</button>
        </div>
        <div className="input-box">
          <input type="text" />
          <button type="button" name="button" className="rounded black">
            <span className="icon search_white"></span>
            Buscar
          </button>
        </div>
        <div className="input-box">
          <label>S/.</label>
          <input type="number"
            defaultValue="850"
            min="850"
            max="20000"
            step="50"
            maxLength="5"
            style={{width:'100px'}} />
          <button type="button" name="button" className="rounded blue">
            <span className="icon search_white"></span>
          </button>
        </div>

        <div className="input-box large">
          <label>S/.</label>
          <input type="number"
            defaultValue="850"
            min="850"
            max="20000"
            step="50"
            maxLength="5"
            style={{width:'100px'}} />
          <button type="button" name="button" className="rounded blue">
            <span className="icon search_white"></span>
          </button>
        </div>

        <div className="input-box large">
          <label>S/.</label>
          <input type="number"
            defaultValue="850"
            min="850"
            max="20000"
            step="50"
            maxLength="5"
            style={{width:'100px'}} />
          <button type="button" name="button" className="rounded blue">
            Buscar
          </button>
        </div>

        <div className="input-box large">
          <label>S/.</label>
          <input type="number"
            defaultValue="850"
            min="850"
            max="20000"
            step="50"
            maxLength="5"
            style={{width:'100px'}}/>
          <button type="button" name="button" className="rounded red">
            <span className="icon search_white"></span>
            Buscar
          </button>
        </div>
      </div>
    )
  }
}

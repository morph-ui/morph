import React from 'react';

export default class Input extends React.Component {
  render() {
    return (
      <div>
      <p>
        <h3>Cajas de texto</h3>
      </p>
      <p>
        <label for="">Cajas de texto</label>
        <input type="text" name="" value="" placeholder="Input" />

        <label for="">Cajas de texto roja</label>
        <input type="text" name="" value="" placeholder="Input red" class="red" />

        <label for="">Cajas de texto negra</label>
        <input type="text" name="" value="" placeholder="Input black" class="black" />

        <label for="">Cajas de texto azul</label>
        <input type="text" name="" value="" placeholder="Input blue" class="blue" />

        <label for="">Cajas de texto amarillo</label>
        <input type="text" name="" value="" placeholder="Input yellow" class="yellow" />

        <label for="">Cajas de texto verde</label>
        <input type="text" name="" value="" placeholder="Input green" class="green" />
      </p>
      <hr/>
      <br/>
      <p>
        <h3>Cajas de texto con botoones (.input-box)</h3>
      </p>
      <div class="input-box">
        <input type="text" />
        <button type="button">Buscar</button>
      </div>
      <div class="input-box">
        <input type="text" />
        <button type="button" name="button" class="rounded">Buscar</button>
      </div>

      <div class="input-box">
        <input type="text" />
        <button type="button" name="button" class="rounded red">Buscar</button>
      </div>

      <div class="input-box">
        <input type="text" />
        <button type="button" name="button" class="rounded black">
          <span class="icon search_white"></span>
          Buscar
        </button>
      </div>

        <div class="input-box">
          <label for="">S/.</label>
          <input type="number"
            value="850"
            min="850"
            max="20000"
            step="50"
            maxlength="5"
            style="width:100px" />
          <button type="button" name="button" class="rounded blue">
            <span class="icon search_white"></span>
          </button>
        </div>

        <div class="input-box large">
          <label for="">S/.</label>
          <input type="number"
            value="850"
            min="850"
            max="20000"
            step="50"
            maxlength="5"
            style="width:100px" />
          <button type="button" name="button" class="rounded blue">
            <span class="icon search_white"></span>
          </button>
        </div>

        <div class="input-box large">
          <label for="">S/.</label>
          <input type="number"
            value="850"
            min="850"
            max="20000"
            step="50"
            maxlength="5"
            style="width:100px" />
          <button type="button" name="button" class="rounded blue">
            Buscar
          </button>
        </div>

        <div class="input-box large">
          <label for="">S/.</label>
          <input type="number"
            value="850"
            min="850"
            max="20000"
            step="50"
            maxlength="5"
            style="width:100px"/>
          <button type="button" name="button" class="rounded red">
            <span class="icon search_white"></span>
            Buscar
          </button>
        </div>
      </div>
    )
  }
}

import React from 'react';

export default class Table extends React.Component {
  render() {
    return (
      <div>
        <h3>Tabla</h3>
        <table>
          <thead>
            <tr>
              <th>Elemento 1</th>
              <th>Elemento 2</th>
              <th>Elemento 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <hr/>
        <br/>
        <h3>Tabla con (strip-horizontal)</h3>
        <table className="strip-horizontal">
          <thead>
            <tr>
              <th>Elemento 1</th>
              <th>Elemento 2</th>
              <th>Elemento 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <hr/>
        <br/>
        <h3>Tabla con (strip-vertical)</h3>
        <table className="strip-vertical">
          <thead>
            <tr>
              <th>Elemento 1</th>
              <th>Elemento 2</th>
              <th>Elemento 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <hr/>
        <br/>
        <h3>Tabla (expandida y con strip-horizontal)</h3>
        <table className="expanded strip-horizontal">
          <thead>
            <tr>
              <th>Elemento 1</th>
              <th>Elemento 2</th>
              <th>Elemento 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <hr/>
        <br/>
        <h3>Table (expandida y con strip-horizontal) con cabeceras (center, right, left)</h3>
        <table className="expanded strip-horizontal">
          <thead>
            <tr>
              <th>Left</th>
              <th>Center</th>
              <th>Right</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <hr/>
        <br/>
        <h3>Tabla (expandida y con strip-horizontal) con cabeceras y contenido (center, right, left)</h3>
        <table className="expanded strip-horizontal">
          <thead>
            <tr>
              <th className="left">Left</th>
              <th className="center">Center</th>
              <th className="right">Right</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="left">1</td>
              <td className="center">2</td>
              <td className="right">3</td>
            </tr>
            <tr>
              <td className="left">1</td>
              <td className="center">2</td>
              <td className="right">3</td>
            </tr>
            <tr>
              <td className="left">1</td>
              <td className="center">2</td>
              <td className="right">3</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

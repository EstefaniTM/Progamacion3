import React from 'react';

function Tabla() {
  return (
    <>
      <ul>
        <li>Nombre</li>
        <li>Apellido</li>
      </ul>
      
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Juan</td>
            <td>Pérez</td>
          </tr>

        </tbody>
      </table>
    </>
  );
}

export default Tabla;
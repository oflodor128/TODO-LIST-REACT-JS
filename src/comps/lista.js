import React from 'react';

const Lista = ({lista, eliminarLista,tarea}) => (
  <div className="box">
  <p> Tarea:<span>{lista.tarea}</span> </p>


  <button
  className="borrar"
  onClick={ () => eliminarLista(lista.id)}
  >Borrar &times; </button>



  </div>
);

export default Lista;

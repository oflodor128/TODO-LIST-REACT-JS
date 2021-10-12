import React, {Fragment, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const Formulario = ({crearLista}) =>{

  //state Lista

  const [lista, actualizarLista] = useState({
    tarea: '',
  });

const [error, actualizarError] = useState(false);


  //Usuario escribe
  const actualizarState = e =>{
    actualizarLista({
      ...lista,
      [e.target.name]: e.target.value
    })
  }

  //Extraccion
  const {tarea} = lista;

  const subLista = e => {
    e.preventDefault();

//Validar
if(tarea.trim() === ''){
  actualizarError(true);
  return;
}

actualizarError(false);

//Asignar
lista.id = uuidv4();
console.log(lista);

//Crear
crearLista(lista);
//Reiniciar
actualizarLista({
  tarea: ''

})

  }

  return(
    <Fragment>
    { error? <p className="alerta-error">No ha indicado una tarea</p>
    : null}
      <h2>To-do List</h2>

      <form
        onSubmit={subLista}>
    
        <input
            type="text"
            name="tarea"
            className="box"


            placeholder="Ingrese una tarea"
            onChange={actualizarState}
            value={tarea}
          />


                <button
                type="submit"
                className="agregar">
                Agregar Tarea
                </button>

      </form>
    </Fragment>
  )
}
export default Formulario;

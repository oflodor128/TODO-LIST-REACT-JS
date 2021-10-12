import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './comps/formu';
import Lista from './comps/lista';


function App() {

  let listasIniciales = JSON.parse(localStorage.getItem('listas'));
  if(!listasIniciales){
    listasIniciales = [];
  }

const [listas, guardarListas] = useState(listasIniciales);

useEffect(() => {
  if(listasIniciales){
    localStorage.setItem('listas', JSON.stringify(listas));
  }else{
    localStorage.setItem('listas', JSON.stringify([]));
  }
}, [listas]);

const crearLista = lista => {
  guardarListas([...listas, lista ]);
}

const eliminarLista = id => {
  const nuevasListas = listas.filter(lista => lista.id !== id);
  guardarListas(nuevasListas);
}

  return (
    <Fragment>
    <h1>Todo list</h1>

    <div className="container">
      <div className="row">
        <div className="one-half column">
        <Formulario
        crearLista={crearLista}/>
        </div>

        <div className="column">
        <h2>Tareas Pendientes</h2>
        {listas.map(lista => (
          <Lista
          key={lista.id}
          lista={lista}
          eliminarLista={eliminarLista}/>
        ))}

        </div>
      </div>
    </div>


    </Fragment >
  );
}

export default App;

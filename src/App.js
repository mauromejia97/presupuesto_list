import React, { useEffect, useState } from 'react'
import ControlPresupuesto from './components/ControlPresupuesto';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Pregunta from './components/Pregunta'


function App() {

  //definir State
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false)

  //UseEffect que actualiza el restante

  useEffect(() => {
    if (crearGasto) {

      //Agrega el nuevo presupuesto

      setGastos([
        ...gastos,
        gasto
      ]);

      //Resta el presupuesto actual

      const presupuestoRestante = restante - gasto.cantidad
      setRestante(presupuestoRestante)

      //resetear a False

      setCrearGasto(false);
    }
  }, [gasto, crearGasto, restante, gastos]);


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              guardarPresupuesto={setPresupuesto}
              guardarRestante={setRestante}
              actualizarPregunta={actualizarPregunta}
            />)
            : (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    guardarGasto={guardarGasto}
                    setCrearGasto={setCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos} />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )
          }


        </div>

      </header>
    </div>
  );
}

export default App;

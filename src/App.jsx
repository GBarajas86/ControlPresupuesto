import React from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  // Definir el State
  const [presupuesto, setPresupuesto] = React.useState(0)
  const [restante, setRestante] = React.useState(0)
  const [mostrarPregunta, setMostrarPregunta] = React.useState(true)
  const [gastos, setGastos] = React.useState([])
  const [gasto, setGasto] = React.useState({})
  const [crearGasto, setCrearGasto] = React.useState(false)

  // UseEffect que actualiza el restante
  React.useEffect(() => {
    if (crearGasto) {
      
      // Agrega el nuevo Presupuesto
      setGastos([
        ...gastos,
        gasto
      ])

      // resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      setRestante(presupuestoRestante)


      // Resetear a false
    setCrearGasto(false)
    }
  }, [gasto,crearGasto,gastos,restante])

  // Cuando Agreguemos un nuevo gasto

  const agregarNuevoGasto = gasto => {

  }


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">

          {
            mostrarPregunta
              ?
              <Pregunta
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setMostrarPregunta={setMostrarPregunta}
              />

              :
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    setGasto={setGasto}
                    setCrearGasto={setCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>

          }

        </div>
      </header>
    </div>
  );
}

export default App;

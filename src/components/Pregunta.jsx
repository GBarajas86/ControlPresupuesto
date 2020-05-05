import React, {Fragment} from 'react'
import Error from './Error'

const Pregunta = ({setPresupuesto, setRestante, setMostrarPregunta}) => {
    
    const [cantidad, setCantidad] = React.useState(0)
    const [error, setError] = React.useState(false)
    
    //Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value))
        
    }

    //Funcion para agregar el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault()

        //validar
        if (cantidad < 1 || isNaN( cantidad )) {
            setError(true)
            return
        }

        // Si pasa la validacion
        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrarPregunta(false)
    }
    
    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            {
                error 
                    ? <Error mensaje="El presupuesto es incorrecto" />
                    : null
            }

            <form 
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                    
                />
            </form>
        </Fragment>
    )
}

export default Pregunta

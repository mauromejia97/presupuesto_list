import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    // Definir un state

    const [cantidad, guardarCantidad] = useState(0);
    const [error, setError] = useState(false)

    //Funcion que lee presupuesto

    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value, 10));
    } /* LO QUE VIENE DE UN INPUT LO TOMA COMO STRING */

    const agregarPresupuesto = (e) => {
        e.preventDefault()

        //Validacion
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true)
            return
        }
        //Si pasa la validacion
        setError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad)
        actualizarPregunta(false)

    }

    return (
        <>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="nombre"
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
        </>
    )
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta
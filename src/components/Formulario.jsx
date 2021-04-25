import React, { useState } from 'react'
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto,setCrearGasto}) => {

    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const guardarNombre = (e) => {
        setNombre(e.target.value)
    }

    const guardarCantidad = (e) => {
        setCantidad(parseInt(e.target.value, 10))
    }

    const agregarGasto = (e) => {
        e.preventDefault()

        //Validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true);
            return;
        }
        setError(false)

        //Construir el gasto (objeto)

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        
        //pasar el gasto al componente principal
        guardarGasto(gasto);
        setCrearGasto(true);

        //resetear el form
        setNombre("");
        setCantidad(0);
    }
    return (
        <form
            onSubmit={agregarGasto}
        >
            
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej: Transporte"
                    value={nombre}
                    onChange={guardarNombre}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej: 300"
                    value={cantidad}
                    onChange={guardarCantidad}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    )
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    setCrearGasto:  PropTypes.func.isRequired
}

export default Formulario

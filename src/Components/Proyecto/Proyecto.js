import React from 'react'
import Trailer from '../../images/trailer.jpg'
import './Proyecto.css'

function Proyecto(){
    return(
        <div className="backproyecto">
            <fieldset>
                <legend align="center">EL PROYECTO</legend>
                <div className="legend2">OASIS</div>
            <div className="trailer">
                <img src = {Trailer} alt="loading"/>
                <div className="proyectotext1">
                    <h3>SINOPSIS</h3>
                    <p>
                        Ada se siente cómoda viviendo encerrada en su propio
                        mundo y al margen de la realidad. Tendrá que despertar 
                        para vivir la aceptación y encontrar su verdadero OASIS.
                    </p>
                </div>
                <div className="proyectotext3">
                    <i>VER TRÁILER</i>
                </div>
            </div>
            </fieldset>
        </div>
    )
}

export default Proyecto;
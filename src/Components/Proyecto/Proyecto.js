import React from 'react'
import Trailer from '../../images/trailer.jpg'
import './Proyecto.css'

import Menu from '../Menu/Menu'
function Proyecto(){
    return(
        <div>
        <Menu/>
        <div className="backproyecto" style={{position:"absolute", zIndex:-2}}>
       
            <fieldset>
                <legend align="center">EL PROYECTO</legend>
                <div className="legend2">OASIS</div>
            <div className="trailer" style={{zIndex:30}}>
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
        </div>
    )
}

export default Proyecto;
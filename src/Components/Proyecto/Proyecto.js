import React from 'react'
import NavBar from '../NavBar/NavBar'
import Random from '../../images/randompic.jpg'
import './Proyecto.css'

function Proyecto(){
    return(
        <div className="backproyecto">
            <NavBar/> 
            <h1 className="proyecto">Proyecto</h1>
            <h2 className="proyecto">OASIS</h2>
            <div className="rectproyecto"></div>
            <div className="trailer">
                <img src = {Random} alt="loading"/>
                <div className="proyectotext1">
                    <h3>SINOPSIS</h3>
                    <p>
                        Ada se siente cómoda viviendo encerrada en su propio
                        mundo y al margen de la realidad. Tendrá que despertar 
                        para vivir la aceptación y encontrar su verdadero OASIS.
                    </p>
                </div>
                <div className="proyectotext2">
                    <h3>MOTIVACIÓN</h3>
                    <p>
                        OASIS plantea una historia sobre el estado de la ignorancia
                        consciente como forma de vida. También habla de la intervención de fuentes
                        externas que impiden llegar a la esencia de la realidad.
                    </p>
                    <p>
                        El proyecto nace con la voluntad de crítica hacia este modelo de vida cómodo 
                        y estático, y contra el no querer aceptar y avanzar. 
                    </p>
                </div>
                <div className="proyectotext3">
                    VER TRÁILER
                </div>
            </div>
        </div>
                        // <img src = {Random} alt="loading"/>

    )
}

export default Proyecto;
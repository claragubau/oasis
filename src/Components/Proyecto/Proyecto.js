import React from 'react'
import Trailer from '../../images/trailer.jpg'
import './Proyecto.css'
import playbutton from '../../images/PLAY.png'

function Proyecto(){
    return(
        <div>
        <image src={playbutton} className="play" style={{zIndex:25, marginTop:"0px", marginLeft:"0px"}}/>
        <div className="backproyecto">
            <fieldset>
                <legend align="center">EL PROYECTO</legend>
            </fieldset>
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
                <image src={playbutton} className="play"/>
            </div>
        </div>
        <div className="backreparto">
            <div className="textreparto">
            <div style={{fontWeight:"bold"}}>ADA</div>Mireia Farré<br/><br/>
            <div style={{fontWeight:"bold"}}>BEA</div>nose com es diu<br/><br/>
            <div style={{fontWeight:"bold"}}>KEVIN</div>Igor Sparkowski
            </div>
        </div>
        </div>
    )
}

export default Proyecto;
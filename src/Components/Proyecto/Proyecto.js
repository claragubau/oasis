import Trailer from '../../images/trailer.jpg'
import './Proyecto.css'
import playbutton from '../../images/PLAY.png'
import React, { Component } from 'react'
import Menu from '../Menu/Menu'

class Proyecto extends Component{

    render(){
    return(
        <div>
        <Menu/>
        <div className="backproyecto" style={{position:"absolute", zIndex:-2}}>
       
            <fieldset>
            <legend align="center">EL PROYECTO</legend>
            </fieldset>
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
                    <image src={playbutton}/>
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
}


export default Proyecto;
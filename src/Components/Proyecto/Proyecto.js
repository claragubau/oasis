import './Proyecto.css'
import React, { Component } from 'react'
import Menu from '../Menu/Menu.js'
import btn from '../../images/Reparto_Botó.png'

class Proyecto extends Component{
    render(){
    return(
        <div>
        <Menu/>
        <div className="backproyecto" style={{position:"absolute"}}>
            <fieldset>
                <legend align="center">EL PROYECTO</legend>
            </fieldset>
            <div className="sinopsis">
                <div className="sinopsisAll">
                    <div className="stitle">SINOPSIS</div>
                    <div className="stext">
                        Ada se siente cómoda viviendo encerrada en su propio
                        mundo y al margen de la realidad. Tendrá que despertar 
                        para vivir la aceptación y encontrar su verdadero <i>OASIS</i>.
                    </div>
                </div>
                <iframe className="videoYoutube" src="https://www.youtube.com/embed/2wesHzNkLEE"/>


                <button className="pbutton" onClick={() => {window.scroll(0, 1100);}}>
                    <img src={btn} alt="loding..."/>
                </button>
            </div>
        </div>
        <div className="backreparto">
            <div className="textreparto">
            <div style={{fontWeight:"bolder"}}>ADA</div>Mireia Ferré<br/><br/>
            <div style={{fontWeight:"bolder"}}>BEA</div>Cybele Buffile<br/><br/>
            <div style={{fontWeight:"bolder"}}>KEVIN</div>Igor Szpakowski
            </div>
        </div>
        </div>
    )
    }
}
export default Proyecto;
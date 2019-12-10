import React from 'react'
import David from '../../images/David.gif'
import Buke from '../../images/Buke.gif'
import Isi from '../../images/Isi.gif'
import Lluis from '../../images/Lluis.gif'
import Marta from '../../images/Marta.gif'
import Pau from '../../images/Pau.gif'
import './equipo.css'

function Equipo(){
    return(
        <div>
            {/* <h1 className="equipo1">EQUIPO</h1>
            <h2 className="equipo">OASIS</h2>
            <div className="rectequipo"></div> */}
            <div className="grid-container">
                <div className="column">
                    <div className="row">
                        <div className="overlay">
                            <div className="text">DAVID ALSINA</div>
                            <div className="subtext"> ricardo </div>
                        </div>
                        <img src = {David} alt="loading..." className/>
                    </div>
                    <div className="row">
                        <div className="overlay"><div className="text"> Buke </div> 
                        <div className="subtext"> ricardo </div>
                        </div>
                        <img src = {Buke} alt="loading..."/>
                    </div>
                </div>
                <div className="column">
                    <div className="row">
                        <div className="overlay"><div className="text"> Isi </div>
                        <div className="subtext"> ricardo </div></div>
                        <img src = {Isi} alt="loading..."/>
                    </div>
                    <div className="row">
                        <div className="overlay"><div className="text"> Lluis </div>
                        <div className="subtext"> ricardo </div></div>
                        <img src = {Lluis} alt="loading..."/>
                    </div>
                </div>
                <div className="column">
                    <div className="row">
                        <div className="overlay"><div className="text"> Marta </div>
                        <div className="subtext"> ricardo </div></div>
                        <img src = {Marta} alt="loading..."/>
                    </div>
                    <div className="row">
                        <div className="overlay"><div className="text"> Pau </div>
                        <div className="subtext"> ricardo </div></div>
                        <img src = {Pau} alt="loading..."/>
                    </div>
                </div>
            </div>

            <div className="backequipo">
                Dirección y Guión
                DAVID ALSINA
                Ayudante de Dirección
                LLUÍS CASCALES
                Auxiliar de Ayudante de Dirección
                BERTA VILARÓ
                
            </div>
        </div>
    )
}

export default Equipo;
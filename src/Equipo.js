import React from 'react'
import David from './images/David.gif'
import Buke from './images/Buke.gif'
import Isi from './images/Isi.gif'
import Lluis from './images/Lluis.gif'
import Marta from './images/Marta.gif'
import Pau from './images/Pau.gif'

function Equipo(){
    return(
        <div>
            <div className="grid-container">
                <div className="column">
                    <div className="row">
                        {/* <div className="text">
                            1111111111111
                        </div> */}
                        <img src = {David} alt="loading..." className/>
                    </div>
                    <div className="row">
                        <div className="text">
                            2222222222222
                        </div>
                        <img src = {Buke} alt="loading..."/>
                        <div className="text">
                            joder222222222222
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="row">
                        <img src = {Isi} alt="loading..."/>
                        <div className="text">
                            mecaaaaaaaaaaaaaagoen
                        </div>
                    </div>
                    <div className="row"><img src = {Lluis} alt="loading..."/></div>
                </div>
                <div className="column">
                    <div className="row"><img src = {Marta} alt="loading..."/></div>
                    <div className="row"><img src = {Pau} alt="loading..."/></div>
                </div>
            </div>
            {/* <h1 className="equipo1">EQUIPO</h1>
            <h2 className="equipo">OASIS</h2>
            <div className="rectequipo"></div> */}
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
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
            <div className="grid-container">
                <div className="column">
                    <div className="row">
                        <div className="overlay">
                            <div className="text">David</div>
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
                <div className="grid">
                    <div className="column1">
                        <div className="first">Dirección y Guión</div>
                        <div className="second">DAVID ALSINA</div>
                        <div className="first">Ayudante de Dirección</div>
                        <div className="second">LLUÍS CASCALES</div>
                        <div className="first">Auxiliar de Ayudante de Dirección</div>
                        <div className="second">BERTA VILARÓ</div>
                        <div className="first">Script</div>
                        <div className="second">JÚLIA RECARENS</div>
                        <div className="first">Dirección de Arte y Diseño Gráfico</div>
                        <div className="second">MARIA BOQUERA</div>
                        <div className="first">Ayudante de Arte</div>
                        <div className="second">VÍCTOR GARCIA</div>
                        <div className="first">Auxiliares de Arte</div>
                        <div className="second">CLARA BORRULL<br/>MÒNICA FORNELLS</div>
                        <div className="first">Maquillaje</div>
                        <div className="second">LAIA COMELLA</div>
                        <div className="first">Vestuario</div>
                        <div className="second">CLARA BORRULL</div>
                        <div className="first">Programación</div>
                        <div className="second">CLARA GUBAU</div>
                   </div>
                   <div className="column2">
                       <div className="first">Producción</div>
                       <div className="second">MARTA CÁMARA</div>
                       <div className="first">Auxiliar de Producción</div>
                       <div className="second">YERAY CORONADO</div>
                       <div className="first">Técnica de Sonido</div>
                       <div className="second">ISABEL PÉREZ</div>
                       <div className="first">Técnico de Sonido</div>
                       <div className="second">HANS LUDWIG</div>
                       <div className="first">Ayudantes de Sonido</div>    
                       <div className="second">ROC FAIXEDAS<br/>LLÍVIA FULQUET</div>
                       <div className="first">Script de Sonido</div>
                       <div className="second">LÍVIA FULQUET</div>
                       <div className="first">Compositor BSO</div>
                       <div className="second">PABLO RUIZ</div>
                       <div className="first">Editor de Sonido</div>
                       <div className="second">LLUÍS CASCALES<br/>HANS LUDWIG</div> 
                       <div className="first">Reparto</div>
                        <div className="second">MIREIA FERRÉ<br/>DESCONOCIDO<br/>DESCONOCIDO</div>
                    </div> 
                    <div className="column3">
                    <div className="first">Dirección de Fotografia y Primer operador de Cámara</div>
                    <div className="second">PAU SIMON</div>
                    <div className="first">Ayudante de Cámara</div>
                    <div className="second">ÈRIC MARCO</div>
                    <div className="first">Auxiliar de Cámara</div>
                    <div className="second">ADAM PUIG</div>
                    <div className="first">Forquista</div>
                    <div className="second">SAIOA ARROYO</div>
                    <div className="first">Gaffer</div>
                    <div className="second">desconocido</div>
                    <div className="first">Eléctricos</div>
                    <div className="second">RICARD PALET</div>
                    <div className="first">Dirección de Post-producción</div>
                    <div className="second">ISABEL PÉREZ</div>
                    <div className="first">Ayudante de Post-producción</div>
                    <div className="second">DESCONOCIDO</div>
                    <div className="first">Foto fija</div>
                    <div className="second">MARTÍ MENENDEZ</div>
                    <div className="first">Making of</div>
                    <div className="second">PAU POMAR</div>
                    </div>
                </div>
            </div>
            <h1 className="equipo1">EQUIPO</h1>
            <h2 className="equipo">OASIS</h2>
            {/* <div className="rectequipo"></div> */}
        </div>
    )
}

export default Equipo;
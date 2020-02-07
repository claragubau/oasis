import React from 'react'
import David from '../../images/equipo/da.gif'
import Buke from '../../images/equipo/buke.gif'
import Isi from '../../images/equipo/isi.gif'
import Lluis from '../../images/equipo/lluis.gif'
import Marta from '../../images/equipo/marta.gif'
import Pau from '../../images/equipo/pau.gif'
import './equipo.css'
import Menu from '../Menu/Menu'
import btn from '../../images/bverd.png'


function Equipo(){

    return(
        <div>
            <Menu/>
            <fieldset>
                <legend align="center">EQUIPO</legend>
                <div style={{position:"relative"}}><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/2wesHzNkLEE" class="ebutton"><i><b>MAKING OF</b></i></a></div>
            </fieldset>
            <div className="grid-container">
                <div className="column">
                    <div className="row">
                        <div className="overlayequipo">
                            <div className="text">DAVID ALSINA</div>
                            <div className="subtext">Dirección y Guión</div>
                        </div>
                        <img src = {David} alt="loading..." />
                    </div>
                    <div className="row">
                        <div className="overlayequipo"><div className="text">MARIA BOQUERA</div> 
                        <div className="subtext">Dirección de Arte y Diseño Gráfico</div>
                        </div>
                        <img src = {Buke} alt="loading..."/>
                    </div>
                </div>
                <div className="column">
                    <div className="row">
                        <div className="overlayequipo"><div className="text">ISABEL PÉREZ</div>
                        <div className="subtext">Dirección de Postproducción y Responsable de Sonido</div></div>
                        <img src = {Isi} alt="loading..."/>
                    </div>
                    <div className="row">
                        <div className="overlayequipo"><div className="text"> MARTA CÁMARA </div>
                        <div className="subtext"> Dirección de Producción </div></div>
                        <img src = {Marta} alt="loading..."/>
                    </div>
                </div>
                <div className="column">

                    <div className="row">
                        <div className="overlayequipo"><div className="text"> LLUÍS CASCALES </div>
                        <div className="subtext"> Ayudante de Dirección </div></div>
                        <img src = {Lluis} alt="loading..."/>
                    </div>
                    <div className="row">
                        <button onClick={() => {window.scroll(0, 700);}}>
                            <img src={btn} alt="loding..."/>
                        </button>
                        <div className="overlayequipo"><div className="text"> PAU SIMON </div>
                        <div className="subtext"> Dirección de Fotografia y Responsable de Transmedia </div></div>
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
                        <div className="first">Segunda Ayudante de Dirección</div>
                        <div className="second">BERTA VILARÓ</div>
                        <div className="first">Scripts de Vídeo</div>
                        <div className="second">JÚLIA RECARENS<br/>GUILLERMO OSORTO</div>
                        <div className="first">Dirección de Arte y Diseño Gráfico</div>
                        <div className="second">MARIA BOQUERA</div>
                        <div className="first">Ayudantes de Arte</div>
                        <div className="second">VÍCTOR GARCIA<br/>MÒNICA FORNELLS</div>
                        <div className="first">Maquillaje y Peluquería</div>
                        <div className="second">ALICE MARTOS<br/>MªPILAR GUERRERO</div>
                        <div className="first">Vestuario</div>
                        <div className="second">CLARA BORRULL</div>
                        <div className="first">Edición, Etalonaje y DIT</div>
                        <div className="second">ISABEL PÉREZ</div>
                   </div>
                    <div className="column2">
                       <div className="first">Dirección de Producción</div>
                       <div className="second">MARTA CÁMARA</div>
                       <div className="first">Ayudante de Producción</div>
                       <div className="second">YERAY CORONADO</div>
                       <div className="first">Responsable de Sonido</div>
                       <div className="second">ISABEL PÉREZ</div>
                       <div className="first">Sonidista</div>
                       <div className="second">ROC FAIXEDAS</div>
                       <div className="first">Ayudante de Sonido y Perchista</div>    
                       <div className="second">LÍVIA FULQUET</div>
                       <div className="first">Script de Sonido</div>
                       <div className="second">MANEL GALLART</div>
                       <div className="first">Compositor BSO</div>
                       <div className="second">PABLO RUIZ</div>
                       <div className="first">Editor de Sonido</div>
                       <div className="second">HANS LUDWIG</div> 
                       <div className="first">Ayudantes de Postproducción de Sonido</div>
                        <div className="second">MANEL GALLART<br/>LLUÍS CASCALES</div>
                        <div className="first">Making of</div>
                        <div className="second">JOAN CAROLÀ</div>
                    </div> 
                    <div className="column3">
                        <div className="first">Dirección de Fotografia</div>
                        <div className="second">PAU SIMON<br/>KARU BORGE</div>
                        <div className="first">Gaffer</div>
                        <div className="second">ARTURO DEL VALLE</div>
                        <div className="first">Operador de Cámara</div>
                        <div className="second">ERIC MARCO</div>
                        <div className="first">Forquista y Ayudante de Cámara</div>
                        <div className="second">SAIOA ARROYO</div>
                        <div className="first">Auxiliares de Cámara</div>
                        <div className="second">JÚLIA GONZÀLEZ<br/>RICARD PALET</div>
                        <div className="first">Best Boy</div>
                        <div className="second">DAVID BERTOMEU</div>
                        <div className="first">Eléctricas</div>
                        <div className="second">RICARD PALET<br/>JÚLIA GONZÀLEZ</div>
                        <div className="first">Foto fija</div>
                        <div className="second">MARTÍ MENENDEZ</div>
                        <div className="first">Programación Web</div>
                        <div className="second">CLARA GUBAU</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equipo;
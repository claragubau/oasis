import React from 'react'
import './Colabora.css'

function Colabora(){
    return(
        <div className="backcolab">
            <h1 className="colabora1">COLABORA</h1> 
            <div className="rectcolab"></div>
            <h2 className="colabora2">OASIS</h2>
            <div className="lefttext">
                <b>FUNCIONAMIENTO DEL FONDO COMÚN</b>
                <br/>
                Para recompensar la aportación, el fondo común cuenta con <b>sorteos</b>.
                <br/>
                El dinero recaudado será invertido, al 100%, en OASIS.
                <br/>
                Se pueden hacer aportaciones anónimas*.
                <br/>
                CUALQUIER IMPORTE al fondo común será bienvenido.
                <br/>
                Los sorteos son acumulables. Cuanto mayor es la aportación, en más sorteos participas.
                <br/>
                Facilitanos el NOMBRE Y APELLIDOS al hacer una aportación no-anónima.
                <br/>
                El <b>14 DE FEBRERO DE 2020</b> se anunciarán las ganadoras.
                <br/>
                Un premio por persona ganadora.
            </div>    
            <div className="righttext">
                <b>¿POR QUÉ UN FONDO COMÚN?</b>
                <br/>
                OASIS se sustenta sobre una base econónmica débil i la mejor forma para construirlo
                es contando con <b>pequeños granitos de arena.</b>
            </div>
        </div>
    )
}
export default Colabora;
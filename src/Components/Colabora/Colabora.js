import React from 'react'
import Fleca from '../../images/fleca.jpg'
import Cmas from '../../images/casamas.jpg'
import Eram from '../../images/logoeram.png'
import Paypal from '../../images/paypal.png'
import './Colabora.css'

function Colabora(){
    return(
        <div>
            <div className="backcolab">
                <div className="lefttext">
                    <b>FUNCIONAMIENTO DEL <i>FONDO COMÚN</i></b>
                    <br/>
                    Para recompensar la aportación, el fondo común cuenta con <b>sorteos</b>.
                    <br/>
                    El dinero recaudado será invertido, al 100%, en <i>OASIS</i>.
                    <br/>
                    Se pueden hacer aportaciones anónimas*.
                    <br/>
                    <i>CUALQUIER IMPORTE</i> al fondo común será bienvenido.
                    <br/>
                    Los sorteos son acumulables. Cuanto mayor es la aportación, en más sorteos participas.
                    <br/>
                    Facilitanos el <i>NOMBRE Y APELLIDOS</i> al hacer una aportación no-anónima.
                    <br/>
                    El <b>14 DE FEBRERO DE 2020</b> se anunciarán las ganadoras.
                    <br/>
                    Un premio por persona ganadora.
                    <div className="downtext"><i>*Las aportacinoes pueden ser anónimas o no, 
                    pero ten en cuenta que si lo son, no se podrá optar a los sorteos</i></div> 
                </div>    
                <div className="righttext">
                    <b><i>¿POR QUÉ UN FONDO COMÚN?</i></b>
                    <br/>
                    <i>OASIS</i> se sustenta sobre una base econónmica débil i la mejor forma para construirlo
                    es contando con <b>pequeños granitos de arena.</b>
                </div>
                <div className="centro">
                    <img src={Paypal} alt="."/>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/pools/c/8jk1MkTAX5" class="button"><b><i>COLABORA</i></b></a>
                </div>
            </div>
            <div className="backcolab2">
               <div className="patrocinadors">
                    <div className="txt1">Con el patrocinio de: </div>
                    <br/>
                    <div class="img1">
                        <img src = {Fleca} alt="loading..."/>
                        <img src = {Cmas} alt="loading..."/>
                    </div>

                    <div className="txt2">Y la colaboración de:</div>
                    <br/>
                    <div className="img2">
                        <img src = {Eram} alt="load"/>
                    </div>
               </div>
            </div> 
        </div>
    )
}
export default Colabora;
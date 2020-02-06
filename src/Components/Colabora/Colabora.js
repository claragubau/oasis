import React from 'react'
import Paypal from '../../images/paypal.png'
import './Colabora.css'
// import logo from './colabimg/ologo.png'
import petit from './colabimg/logpetit.png'
import mig from './colabimg/logmig.png'
import gran from './colabimg/logran.png'

import Menu from '../Menu/Menu'



function Colabora() {
    return (
        <div>
            <Menu/> 
            <div className="backcolab"/>
            <fieldset>
                <legend align="center">COLABORA</legend>
            </fieldset>
            <div className="centro">
                <img className="paypal" src={Paypal} alt="." />
                <a target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/pools/c/8jk1MkTAX5"
                    class="button"><b><i>COLABORA</i></b></a>
                <div className="patrocinadors">
                    <div className="ctext">
                        Contamos con la colaboración de
                </div>
                    <img className="grans" src={gran} alt="..." />
                    <img className="mitjans" src={mig} alt="..." />
                    <img className="petits" src={petit} alt="..." />
                </div>
            </div>
        </div>
    )
}
export default Colabora;
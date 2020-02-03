import React from 'react'
import './Revista.css'
import Vid from '../../images/La_Revista_Fons.mov'

function Revista(){
    return(
        <div style={{position:"absolute", zIndex:-2}}>
            {/* <video id="vid" video autoPlay>
                <source id="mov" src={Vid} type="video/mov"></source>
            </video> */}
            <video autoPlay loop src={Vid} class="vidback"/>
            <fieldset>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/oasis.elproyecto/" class="button"><i><b>IR A TU OASIS</b></i></a>
            </fieldset> 
        </div>
    )
}

export default Revista;
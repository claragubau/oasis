import React from 'react'
import './Revista.css'
import Menu from '../Menu/Menu'


function Revista(){
    return(
        <div>
            <div style={{zIndex:1000, position:"relative"}}><Menu
            color="#ea1488"/></div>
            <fieldset/>
            <div style={{position:"relative"}}><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/oasis.larevista/" class="button"><i><b>IR A TU OASIS</b></i></a>
            </div>
            <div className="backrevista"/>
        </div>
    )
}

export default Revista;
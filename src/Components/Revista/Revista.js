import React from 'react'
import './Revista.css'
import Menu from '../Menu/Menu'


function Revista(){
    return(
        <div>
            <Menu/>
            <fieldset/>
            <div style={{position:"relative"}}><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/oasis.larevista/" class="revistabutton"><i><b>IR A TU OASIS</b></i></a>
            </div>
            <div className="backrevista"/>
        </div>
    )
}

export default Revista;
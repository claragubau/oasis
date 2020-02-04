import React from 'react'
import './Revista.css'
import Menu from '../Menu/Menu'


function Revista(){
    return(
        <div style={{position:"absolute", zIndex:-2}} className="backrevista">
            <Menu/>
            <fieldset/>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/oasis.larevista/" class="button"><i><b>IR A TU OASIS</b></i></a>
        </div>
    )
}

export default Revista;
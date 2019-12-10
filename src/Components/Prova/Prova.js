import React from 'react'
import David from '../../images/David.gif'
import './prova.css'


function Prova(){
    return(
        <div class="container">
            <div class="bg">
                <img src = {David} alt="loading..."/>
                <div class="overlay">
                <h3>Check This <span>Out!</span></h3>
                <p>this is some text.</p>
                </div>
            </div>
        </div>
    )
}

export default Prova;
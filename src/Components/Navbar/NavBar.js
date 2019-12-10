import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <div class="menu-bar">
            <ul>
                <li>
                    <a href="/">Home</a>
                    <a href="/proyecto">Proyecto</a>
                    <a href="/revista">Revista</a>
                    <a href="/equipo">Equipo</a>
                    <a href="/colabora">Colabora</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
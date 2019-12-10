import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <div class="menu-bar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/proyecto">Proyecto</Link>
                    <Link to="/revista">Revista</Link>
                    <Link to="/equipo">Equipo</Link>
                    <Link to="/colabora">Colabora</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
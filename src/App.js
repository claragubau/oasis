import React from 'react';
import Proyecto from './Proyecto'
import Equipo from './Equipo'
import Colabora from './Colabora'
import Home from './Home'
import {Route, Link} from 'react-router-dom'
import Revista from './Revista';
import NavBar from './NavBar';
import Prova from './Prova'


function App() {
  return (   
    <div>
      <NavBar/> 
      <Route exact path="/" component={Home}/>
      <Route exact path="/equipo" component={Equipo}/>
      <Route exact path="/colabora" component={Colabora}/>
      <Route exact path="/revista" component={Revista}/>
      <Route exact path="/proyecto" component={Proyecto}/>
      <Route exact path="/prova" component = {Prova}/>
    </div>
  );
}

/* <div id="myNav" class="overlay">
<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
<div class="overlay-content">
  <a href="#">About</a>
  <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
</div>
</div>

<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span> */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

export default App;

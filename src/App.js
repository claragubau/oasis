import React from 'react';
import Proyecto from './Components/Proyecto/Proyecto'
import Equipo from './Components/Equipo/Equipo'
import Colabora from './Components/Colabora/Colabora'
import Home from './Components/Home/Home'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Revista from './Components/Revista/Revista';
import NavBar from './Components/Navbar/NavBar';
import Prova from './Components/Prova/Prova'


function App() {
  return (   
    <div>
      <NavBar/> 
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/equipo" component={Equipo}/>
      <Route exact path="/colabora" component={Colabora}/>
      <Route exact path="/revista" component={Revista}/>
      <Route exact path="/proyecto" component={Proyecto}/>
      <Route exact path="/prova" component = {Prova}/>
      </Switch>
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

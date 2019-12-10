import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'

//lazy loading the components

const Equipo = React.lazy(() => import('./Components/Equipo/Equipo'));
const Colabora = React.lazy(() => import('./Components/Colabora/Colabora')); 
const Home = React.lazy(() => import('./Components/Home/Home'));
const Prova = React.lazy(() => import('./Components/Prova/Prova'));
const Proyecto = React.lazy(() => import('./Components/Proyecto/Proyecto'));
const Revista = React.lazy(() => import('./Components/Revista/Revista'))
const NavBar = React.lazy(() => import('./Components/NavBar/NavBar'))
const renderLoader = () => <div className="loader"></div>;

function App() {
  //TODO: en el fallback pots posar algu per si tardés a carregar alguna pagina tipus un spinner
  return (   
    <React.Suspense fallback={<div></div>}> 
    <div>
      <NavBar/> 
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/equipo" exact component={Equipo}/>
      <Route path="/colabora" exact component={Colabora}/>
      <Route path="/revista" exact component={Revista}/>
      <Route path="/proyecto" exact component={Proyecto}/>
      <Route path="/prova" exact component = {Prova}/>
      </Switch>
      </BrowserRouter>
    </div>
    </React.Suspense>
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

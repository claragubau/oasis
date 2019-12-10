import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'

//lazy loading the components

const Equipo = React.lazy(() => import('./Components/Equipo/Equipo'));
const Colabora = React.lazy(() => import('./Components/Colabora/Colabora')); 
const Home = React.lazy(() => import('./Components/Home/Home'));
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
      </Switch>
      </BrowserRouter>
    </div>
    </React.Suspense>
  );
}

export default App;

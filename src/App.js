import React from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom'

//lazy loading the components

const Equipo = React.lazy(() => import('./Components/Equipo/Equipo'));
const Colabora = React.lazy(() => import('./Components/Colabora/Colabora')); 
const Home = React.lazy(() => import('./Components/Home/Home'));
const Proyecto = React.lazy(() => import('./Components/Proyecto/Proyecto'));
const Revista = React.lazy(() => import('./Components/Revista/Revista'))

// const renderLoader = () => <div className="loader"></div>;

function App() {
  
  //TODO: en el fallback pots posar algu per si tardés a carregar alguna pagina tipus un spinner
  return (   
    <React.Suspense fallback={<div></div>}> 
    <div>
      {/* <Menu/> */}
      <HashRouter basename="/">
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/equipo" exact component={Equipo}/>
      <Route path="/colabora" exact component={Colabora}/>
      <Route path="/revista" exact component={Revista}/>
      <Route path="/proyecto" exact component={Proyecto}/>
      </Switch>
      </HashRouter>
    </div>
    </React.Suspense>
  );
}
export default App;

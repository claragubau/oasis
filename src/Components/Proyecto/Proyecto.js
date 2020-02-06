import Trailer from '../../images/trailer.jpg'
import './Proyecto.css'
import playbutton from '../../images/PLAY.png'
import React, { Component } from 'react'
import Menu from '../Menu/Menu'

class Proyecto extends Component{
    render(){
    return(
        <div>
        <Menu/>
        <div className="backproyecto" style={{position:"absolute", zIndex:-2}}>
       
            <fieldset>
            <legend align="center">EL PROYECTO</legend>
            </fieldset>
            <div className="trailer" style={{zIndex:30}}>
                <img src = {Trailer} alt="loading"/>
                <div className="proyectotext1">
                    <h3>SINOPSIS</h3>
                    <p>
                        Ada se siente cómoda viviendo encerrada en su propio
                        mundo y al margen de la realidad. Tendrá que despertar 
                        para vivir la aceptación y encontrar su verdadero OASIS.
                    </p>
                </div>
                <div className="proyectotext3">
                    <i>VER TRÁILER</i>
                    <image src={playbutton}/>
                </div>
            </div>
            <img src={playbutton} className="play"/>
            <div style={{marginTop:"150px", marginLeft:"1100px"}}>
                <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
            </div>
        </div>
        <div className="backreparto">
            <div className="textreparto">
            <div style={{fontWeight:"bold"}}>ADA</div>Mireia Farré<br/><br/>
            <div style={{fontWeight:"bold"}}>BEA</div>nose com es diu<br/><br/>
            <div style={{fontWeight:"bold"}}>KEVIN</div>Igor Sparkowski
            </div>
        </div>
        </div>
    )
    }
}

class ScrollButton extends React.Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0
      };
    }
    
    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
    
    render () {
        return <button title='Back to top' className='scroll' 
                 onClick={ () => { this.scrollToTop(); }}>
                  <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
                </button>;
    }
} 

export default Proyecto;
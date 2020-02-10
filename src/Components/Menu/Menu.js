import React, {Component} from 'react';
import { HamburgerButton } from 'react-hamburger-button';
import './Menu.css'
import logo from '../../images/LOGOTIP_WEB.png'
import ig from '../../images/igb.png'
class Menu extends Component{ 

    constructor() {
        super();
        this.state = { open: false};
    }

    handleClick = () => {
        this.setState({
            open: !this.state.open
        });       
        console.log(this.state)
    }

    showMenu(){

        return <div> 
            <div class="overlaymenu">
                <nav><ul>
                        <li><a href={process.env.PUBLIC_URL + "/#/"}>LA HABITACIÓN DE ADA</a></li>
                        <li><a href={process.env.PUBLIC_URL + "/#/proyecto"}>EL PROYECTO</a></li>
                        <li><a href={"/#/revista"}>LA REVISTA</a></li>
                        <li><a href={process.env.PUBLIC_URL + "/#/equipo"}>EQUIPO</a></li>
                        <li><a href={process.env.PUBLIC_URL + "/#/colabora"}>COLABORA</a></li>
                </ul></nav>  
                <fieldset style={{marginTop:"7px", position:"absolute", zIndex:-15}}/>
                <div className="esquerra">
                    <img src={logo} alt="loading" className="lgo"/>
                    {/* <div><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/oasis.elproyecto/" class="button"> */}
                    {/* <img src={ig} alt="loading"/>
                        </a></div> */}
                </div>    
            </div>
        </div>
    }

    hideMenu(){
        return 
    }

    render() {
        return (    
        <div>
            <div style={{position: "relative", zIndex:50}}>
                <div style={{display:"flex", position:"fixed", justifyContent:"center", 
                marginTop:"1.5em", marginLeft:"49.5%", zIndex:9999}} className="hamburgerbutton">
                    <HamburgerButton
                        open={this.state.open}
                        onClick={this.handleClick}
                        width={28}
                        height={20}
                        strokeWidth={1.5}
                        color='white'
                        animationDuration={0.5}
                        style={{margin:"0 auto", zIndex: 5000}}/>
                {this.state.open? this.showMenu():this.hideMenu()}     
                </div>
            </div>
        </div>
        )
    }
}
export default Menu
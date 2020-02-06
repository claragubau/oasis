import React, {Component} from 'react';
import { HamburgerButton } from 'react-hamburger-button';
import './Menu.css'

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

        return <div class="overlaymenu">
            <nav>
                <ul>
                    <div className="mtext">
                        {/* <fieldset/> */}
                        <li><a href="/">LA HABITACIÓN DE ADA</a></li>
                        <li><a href="/proyecto">EL PROYECTO</a></li>
                        <li><a href="/revista">LA REVISTA</a></li>
                        <li><a href="/equipo">EQUIPO</a></li>
                        <li><a href="/colabora">COLABORA</a></li>
                    </div>
                </ul>
            </nav>      
        </div>
    }

    hideMenu(){
        return 
    }

    render() {
        return (    
        <div style={{position: "relative", zIndex:50}}>
            <div style={{display:"flex", position:"fixed", justifyContent:"center", 
                        marginTop:"1.5em", marginLeft:"50%", zIndex:9999}} className="hamburgerbutton">
            <HamburgerButton
                open={this.state.open}
                onClick={this.handleClick}
                width={28}
                height={20}
                // TODO: posar z-index
                strokeWidth={1.5}
                color='black'
                animationDuration={0.5}
                style={{margin:"0 auto", zIndex: 5000}}/>
            {this.state.open? this.showMenu():this.hideMenu()}        
            </div>   
        </div>  
        )
    }
}
export default Menu
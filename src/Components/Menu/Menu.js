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
                    <li><a href="/">LA HABITACIÓN DE ADA</a></li>
                    <li><a href="/proyecto">EL PROYECTO</a></li>
                    <li><a href="/revista">LA REVISTA</a></li>
                    <li><a href="/equipo">EQUIPO</a></li>
                    <li><a href="/colabora">COLABORA!</a></li>
                </ul>
            </nav>      
        </div>
    }

    hideMenu(){
        return 
    }

    render() {
        return (    
        <div>
            <div style={{display:"flex", position:"fixed", justifyContent:"center", 
                        marginTop:"1em", marginLeft:"50%"}}>
            <HamburgerButton
                open={this.state.open}
                onClick={this.handleClick}
                width={23}
                height={18}
                strokeWidth={1}
                color='black'
                animationDuration={0.5}
                style={{margin:"0 auto"}}/>
            {this.state.open? this.showMenu():this.hideMenu()}        
            </div>   
        </div>  
        )
    }
}
export default Menu
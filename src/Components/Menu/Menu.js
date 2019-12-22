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
        return <div class="overlay">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/proyecto">Proyecto</a></li>
                    <li><a href="/revista">Revista</a></li>
                    <li><a href="/equipo">Equipo</a></li>
                    <li><a href="/colabora">Colabora</a></li>
                </ul>
            </nav>      
        </div>
    }

    hideMenu(){
        return <div class="overlay" style={{visibility:"hidden"}}>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/proyecto">Proyecto</a></li>
                    <li><a href="/revista">Revista</a></li>
                    <li><a href="/equipo">Equipo</a></li>
                    <li><a href="/colabora">Colabora</a></li>
                </ul>
            </nav>      
        </div>

    }

    render() {
        return (    
        <div>
            <div style={{display:"flex", position:"fixed", justifyContent:"center", marginTop:"1em", marginLeft:"50%"}}>
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
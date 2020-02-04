import React from 'react'
import './Home.css'
import Menu from '../Menu/Menu'

function Home() {
    return (
        <div>
            <Menu />
            <div className="homerect" style={{ position: "absolute", zIndex: -2 }}>
                <h1>HOME</h1>
            </div>
        </div>
    )
}

export default Home;
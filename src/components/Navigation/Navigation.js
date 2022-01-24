import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavigationStyle.css'
import test from './test.png'
import logo from './../../assets/img/logo.png'
import tache from './../../assets/img/tache.png'

export default function Navigation() {
    
    const [isActive, setActive] = useState(false)

    const toggleNav = () => {
        setActive(!isActive)
    }
    
    return (
        <div className={isActive ? "menuOpen" : "menu"}>

             <section className="banner">
                <header>
                    <img src={logo} className="logo" />
                    <div className="menu-btn" onClick={toggleNav}>
                        <div className="burger"></div>
                    </div>
                </header>
            </section>

            <div className="nav">
                <img src={tache} className="imgLink"/>
                <div className="links">
                    <div className="link">
                        <Link to="/" onClick={toggleNav}>
                            <a href="#">Acceuil</a>
                        </Link>
                        <img src={test} alt="" className="img" />
                    </div>
                    <div className="link">
                        <Link to="/portfolio" onClick={toggleNav}>
                            <a href="#">Porte follio</a>
                        </Link>
                        <img src={test} alt="" className="img" />
                    </div>
                    <div className="link">
                        <a href="/aboutme">A propos de moi</a>
                        <img src={test} alt="" className="img" />
                    </div>
                    <div className="link">
                        <a href="#">Contact</a>
                        <img src={test} alt="" className="img" />
                    </div>
                </div>
                <div className="cursor"></div>
            </div>
        </div>
    )
}

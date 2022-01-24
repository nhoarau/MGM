import React from 'react'
import './Portfolio.css'
import logo from './../../assets/img/logo.png'

export default function Portfolio() {
    return (
        <div className="slider">
            <div className="slider-inner">
                <div className="item">
                <div className="img">
                    <img src={logo}/>
                    <p>test</p>
                </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import video from './../../assets/img/showreel_gorin_marion_2020.mp4'
import ldn from './../../assets/img/ldn.png'
import insta from './../../assets/img/insta.png'
import tache from './../../assets/img/tache.png'
import tachetitle from './../../assets/img/tachetitle.png'

import './HomeStyle.css'

export default function Home() {
    return (
        <div className="container">
            <video src={video} muted loop autoPlay></video>
            <div className="overlay"></div>
            <div className="title">
                <img src={tachetitle} className="titleImg"/>
                <h1>Marion Gorin</h1>
            </div>
            <h3>Monteuse / Cadreuse video</h3>
            <div className="imgs">
                <img src={ldn}/>
                <img src={insta}/>
            </div>
            {/* <div className="tacheClass">
                <img src={tache} className="tache"/>
            </div> */}
        </div>
    )
}
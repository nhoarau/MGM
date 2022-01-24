import React from 'react'
import AboutMeCss from './AboutMe.module.css'
import me from './../../assets/img/me.png'

export default function AboutMe() {
    
    return (
        <section className={AboutMeCss.about}>
            <div className={AboutMeCss.main}>
                <div>
                    <div className={AboutMeCss.imgUnderlay}></div>
                    <img src={me} className={AboutMeCss.imgProfil}/>
                </div>
                <div className={AboutMeCss.aboutText}>
                    <h2 className={AboutMeCss.aboutTitle}>A propos de moi</h2>
                    <h5 className={AboutMeCss.aboutSubTitle}>Monteuse & Cadreuse vidéo</h5>
                    <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).</p>
                    <button type="button" className={AboutMeCss.button}>Mon CV</button>
                </div>
            </div>
        </section>
    )
}

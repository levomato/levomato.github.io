import React from 'react'
import Slide from 'react-reveal/Slide';
import './Ueber.css'
import Map from './../Map/Map'
import Levin from './../../assets/images/Bewerbungsfoto3-removebg-preview.png'
const Ueber = () => {

    return (
        <div className="outerContainer">
            <div className="header">
                <Slide left>
                    <div class="titleContainer">
                        <img className="header-levin" src={Levin} />
                        <h1 className="header-title">Levin <br /> Kerschberger</h1>
                        <h2 className="header-subtitle">Softwaretechnik & Medieninformatik</h2>
                    </div>
                </Slide>
                <Slide right>
                    <div className="textContainer">
                        <h2 className="ueberMich">Über Mich</h2>
                        <span className="ueberMich-text">Nach meinem Abitur am TG Rottweil wollte ich weiterhin etwas mit Medien machen.
                        Programmieren hat mich auch schon immer interessiert. Also dachte ich: Go for it, und seit
                        dem studiere ich recht erfolgreich an der Hochschule Esslingen und bin im Moment als
                        Werksstudent tätig.
                    </span>
                    </div>
                </Slide>
            </div>
            <div className="angeberContainer">
                <div className="angeben">
                    <div className="titleContainer">
                        <Slide left>
                            <h1 className="angeben-title">Mit was ich angeben kann</h1>
                        </Slide>
                        <ul className="angeberListe">

                            <Slide left>
                                <li> Praxiserfahrung in der Programmierung im Front- und Backend</li>
                            </Slide>
                            <Slide left>
                                <li>Erfahrung mit Designsoftware</li>
                            </Slide>
                            <Slide left>
                                <li>Extremer Ehrgeiz</li>
                            </Slide>
                            <Slide left>
                                <li> Gutes technisches, mathematisches und analytisches Verständnis</li>
                            </Slide>
                            <Slide left>
                                <li>Funfact: Ich kann ´nen Zauberwürfel in unter 2 Minuten lösen </li>
                            </Slide>
                        </ul>
                    </div>
                </div>
                <div className="skills">
                    <Slide right>
                        <h2 className="ueberMich">Skills</h2>
                        <div className="skillContainer">
                            <i class="fab fa-html5 fa-skill fa-lg"></i>
                            <span className="skillName">Html5</span>
                        </div>
                        <div className="skillContainer">
                            <i class="fab fa-css3 fa-skill fa-lg"></i>
                            <span className="skillName">CSS3</span>
                        </div>
                        <div className="skillContainer">
                            <i class="fab fa-js-square fa-skill fa-lg"></i>
                            <span className="skillName">JavaScript</span>
                        </div>


                        <div className="skillContainer">
                            <i class="fab fa-react fa-skill"></i>
                            <span className="skillName">ReactJS</span>
                        </div>
                        <div className="skillContainer">
                            <i class="fab fa-node fa-skill"></i>
                            <span className="skillName">NodeJS</span>
                        </div>
                        <div className="skillContainer">
                            <i class="fab fa-php fa-skill"></i>
                            <span className="skillName">PHP</span>
                        </div>

                    </Slide>
                </div>

            </div>
        </div >
    )
}

export default Ueber;
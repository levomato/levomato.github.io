import React from 'react'
import EHG from './../../assets/images/EHG.jpg'
import './Education.css'
const Education = () => {
    return (
        <div className="outerContainer">
            <div className="education-header">
                <h1 className="education-headline">Mein Bildungsweg</h1>
            </div>
            <div className="campusEHG">
                <div className="EHG">
                    <h1 className="campus-headline" >Erich-Hauser-Gewerbeschule</h1>
                    {/* <img src={EHG}></img> */}
                    <h3 className="campus-headline">Technisches Gymnasium</h3>
                    <h3 className="campus-subheadline">Gestaltungs- und Medientechnik</h3>
                    <a className="eduButton" href='https://ehg-rottweil.de/'>
                        <p>
                            <span className="bg"></span>
                            <span className="base"></span>
                            <span className="text">Weitere Info´s</span>
                        </p>
                    </a>
                </div>

            </div>

            <div className="campusHSE">
                <div className="HSE">
                    <h1 className="campus-headline" >Hochschule Esslingen</h1>
                    {/* <img src={EHG}></img> */}
                    <h3 className="campus-headline">University of Applied Sciences</h3>
                    <h3 className="campus-subheadline">Softwaretechnik und Medieninformatik</h3>
                    <a className="eduButton" href='https://www.hs-esslingen.de/'>
                        <p>
                            <span className="bg"></span>
                            <span className="base"></span>
                            <span className="text">Weitere Info´s</span>
                        </p>
                    </a>
                </div>

            </div>
        </div >
    )
}

export default Education
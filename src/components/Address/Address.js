import React from 'react';
import Map from './../Map/Map';
import Slide from 'react-reveal/Slide';
import './Address.css'
const Address = () => {
    const location = {
        address: 'Hauptstraße 36, 78665 Frittlingen',
        lat: 48.125863178566405,
        lng: 8.706327002673726,
    }
    return (
        <div className="outerContainer">
            <Map location={location} zoomLevel={15} />
            <div className="stammdaten">
                <h2 className="persondata">Persönliche Daten</h2>
                <div className="allData">
                    <Slide up>

                        <div className="dataContainer">
                            <span className="skillName">Straße</span>
                            <span className="skillName">Hauptstraße 36</span>
                        </div>
                        <div className="dataContainer">
                            <span className="skillName">Stadt</span>
                            <span className="skillName">78665 Frittlingen</span>
                        </div>
                        <div className="dataContainer">
                            <span className="skillName">E-Mail</span>
                            <span className="skillName">levinkerschberger@gmail.com</span>
                        </div>


                        <div className="dataContainer">
                            <span className="skillName">Telefon</span>
                            <span className="skillName">0176/64821061</span>
                        </div>
                        <div className="dataContainer">
                            <span className="skillName">Geburtsdatum / -ort</span>
                            <span className="skillName">Spaichingen</span>
                        </div>
                        <div className="dataContainer">
                            <span className="skillName">Staatsangehörigkeit</span>
                            <span className="skillName">Deutsch</span>
                        </div>
                        <div className="dataContainer">
                            <span className="skillName">Familienstand</span>
                            <span className="skillName">ledig</span>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    )
}

export default Address;
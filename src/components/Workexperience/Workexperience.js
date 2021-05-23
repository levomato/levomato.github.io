import React from 'react';
import './Workexperience.css'
import Straub from './../../assets/images/STRAUB.jpg'
import Deron from './../../assets/images/Deron.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Workexperience = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (

        <div className="outerContainer">
            <div className="workexperience">
                <div className="work-header">
                    <h1 className="work-headline">Berufserfahrung</h1>
                </div>
                <Carousel responsive={responsive}>
                    <div class="card-container">
                        <div class="card">
                            <div class="card__image-container">
                                <img class="card__image_deron" src={Deron} alt=""></img>
                            </div>

                            <svg class="card__svg" viewBox="0 0 800 500">

                                <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
                                <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
                            </svg>

                            <div class="card__content">
                                <h1 class="card__title">deron services GmbH</h1>
                                <p>Werksstudent</p>
                                <p>HTML / CSS / JavaScript / PHP</p>
                                <p>Programmierung an Kundenprojekten</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
                            <div class="card__image-container">
                                <img class="card__image" src={Straub} alt=""></img>
                            </div>

                            <svg class="card__svg" viewBox="0 0 800 500">

                                <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
                                <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
                            </svg>

                            <div class="card__content">
                                <h1 class="card__title">Straub Druck & Medien AG</h1>
                                <p>Praktikum in der Mediengestaltung.</p>
                                <p>Arbeiten mit Designsoftware von Adobe.</p>
                            </div>
                        </div>
                    </div>

                </Carousel>
            </div>
        </div>



    )
}

export default Workexperience;
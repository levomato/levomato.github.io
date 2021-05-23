import React from 'react';
import './Jobs.css'
import UPS from './../../assets/images/UPS.jpg'
import Haller from './../../assets/images/Haller.jpg'
import Guk from './../../assets/images/Guk.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Jobs = () => {
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
        <div className="jobs">
            <div className="jobs-header">
                <h1 className="jobs-headline">Meine Nebenjobs</h1>
            </div>
            <Carousel responsive={responsive}>
            <div class="card-container">
                <div class="card">
                    <div class="card__image-container">
                        <img class="card__image_deron" src={UPS} alt=""></img>
                    </div>

                    <svg class="card__svg" viewBox="0 0 800 500">

                        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
                        <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
                    </svg>

                    <div class="card__content">
                        <h1 class="card__title">United Parcel Service</h1>
                        <p>Teilzeitmitarbeiter im Lager</p>
                        <p>2019</p>
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <div class="card__image-container">
                        <img class="card__image_deron" src={Haller} alt=""></img>
                    </div>

                    <svg class="card__svg" viewBox="0 0 800 500">

                        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
                        <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
                    </svg>

                    <div class="card__content">
                        <h1 class="card__title">Zimmerei Haller</h1>
                        <p>Ferienjob</p>
                        <p>2018</p>
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <div class="card__image-container">
                        <img class="card__image_deron" src={Guk} alt=""></img>
                    </div>

                    <svg class="card__svg" viewBox="0 0 800 500">

                        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
                        <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
                    </svg>

                    <div class="card__content">
                        <h1 class="card__title">Guk Falzmaschinen</h1>
                        <p>Nebenjob als Maschinenbediener</p>
                        <p>2016-2018</p>
                    </div>
                </div>
            </div>
            </Carousel>
        </div>
    </div>
)
}
export default Jobs;
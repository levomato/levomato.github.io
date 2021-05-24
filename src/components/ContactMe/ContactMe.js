import React from 'react';
import './ContactMe.css'
const ContactMe = () => {
    return (
        <div>
            <div className="education-header">
                <h1 className="education-headline">Kontaktieren Sie mich!</h1>
            </div>
            <div className="wrapper">
                <div className="contact-form">
                    <div className="first-col">
                        <h3 className="chatHeadline">Treten Sie mit mir in Kontakt</h3>
                        <p className="chatP">Ich bin offen für Anregungen und Anfragen aller Art. Möchten sie mir etwas mitteilen?</p>
                    </div>
                    <div className="second-col">
                        <h3 className="chatHeadlinSecond">Schreiben Sie eine Nachricht</h3>
                        <form className="">
                            <div class="form-group field">
                                <input className="form-field" type="text" name="name" placeholder="Name"></input>
                                <label for="name" class="form-label">Name</label>
                            </div>
                            <div class="form-group field">
                                <input className="form-field" type="text" placeholder="Email-Adresse" name="email"></input>
                                <label for="email" class="form-label">Email</label>
                            </div>
                            <div class="form-group field">
                                <input className="form-field" type="text" placeholder="Thema"></input>
                                <label for="name" class="form-label">Betreff</label>
                            </div>
                            <div class="form-group field">

                                <textarea placeholder="Nachricht" className="textarea" id="text" name="text" rows="4" cols="50">
                                </textarea>

                            </div>

                            <div class="form-group field edu">
                                <button className="eduButton">          <p>
                                    <span className="bg"></span>
                                    <span className="base"></span>
                                    <span className="text">Send</span>
                                </p></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
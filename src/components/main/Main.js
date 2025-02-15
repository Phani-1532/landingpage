import React from 'react';
import './Main.css';

function Main() {
    return (
        <main className="main">
            <header className="header">
                <h1>
                    <span className="color1">U</span>
                    <span className="color2">N</span>
                    <span className="color3">I</span>
                    <span className="color4">I</span>
                    <span className="color5">S</span>
                    <span className="color6">P</span>
                    <span className="color7">H</span>
                    <span className="color8">E</span>
                    <span className="color9">R</span>
                    <span className="color10">E</span>
                </h1>
                <p>"Connect" "Collaborate" "Success"</p>
                <button className="cta-button">
                    <span className="color1">P</span>
                    <span className="color2">R</span>
                    <span className="color3">E</span>
                    <span className="color4"> </span>
                    <span className="color5">R</span>
                    <span className="color6">E</span>
                    <span className="color7">G</span>
                    <span className="color8">I</span>
                    <span className="color9">S</span>
                    <span className="color10">T</span>
                    <span className="color1">E</span>
                    <span className="color2">R</span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
                </button>
                <p><strong>"Get a Head Start Pre-register Now"</strong></p>
            </header>

            <section className="about">
                <h2>About Us?</h2>
                <p>Uniisphere is a student networking app designed to connect university students for academic collaboration, social networking, and career development. It offers features like secure messaging, event discovery, study groups, mentorship, freelancing opportunities, and psychological support to create a comprehensive platform for student engagement and growth.</p>
                <div className ='empty'></div>
            </section>
        </main>
    );
}

export default Main;

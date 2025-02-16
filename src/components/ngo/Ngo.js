
import ngo2 from '../../assets/eduvaltImages/ngo.svg'
import ngo from '../../assets/eduvaltImages/ngo2.svg'
import React from 'react';
import './Ngo.css';


function Ngo() {
    return (
        <section className="ngo">
            <h2>NGO</h2>
            <div className="ngo-container">
                <div className="ngo-box">
                    <div className="ngo-images">
                        <img src={ngo} alt="ngo" />
                        <img src={ngo2} alt="ngo2" />
                    </div>
                    <h5>Building a Better Tomorrow by Supporting Communities Today</h5>
                </div>
                <div className="ngo-box">
                    <p>
                    This feature offer you opportunities for volunteering for ngos, internships, and social impact projects, Skill-Based Volunteering and Event Collaboration
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Ngo;




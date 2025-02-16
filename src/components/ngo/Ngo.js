
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
                        This feature offers opportunities for volunteering with NGOs, internships, and social impact projects. 
                        It includes skill-based volunteering, event collaboration, and hands-on experiences to enhance professional 
                        and personal growth. Gain real-world exposure, develop leadership skills, and make a meaningful difference 
                        in communities. Expand your network, boost your resume, and contribute to causes that align with your passions.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Ngo;




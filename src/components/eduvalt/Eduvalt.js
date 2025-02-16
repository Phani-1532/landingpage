import React from 'react';
import './Eduvalt.css';
import eduvalt from '../../assets/eduvaltImages/edu-vault.svg';
import eduvalt2 from '../../assets/eduvaltImages/edu-vault2.svg';

function Eduvalt() {
    return (
        <section className="edu-vault">
            <h2>EDU-VAULT</h2>
            <div className="edu-vault-images">
                <div className="edu-vault-images-box">
                    <div className="edu-vault-images-container">
                        <img src={eduvalt} alt="eduvalt" />
                        <img src={eduvalt2} alt="eduvalt2" />
                    </div>
                    <h5>Your Path to Smarter Learning</h5>
                </div>
                <div className="edu-vault-images-box">
                    <p>Here we Provide E-books, study guides, and reference materials, past papers, handmade notes, while features like search, bookmarks, and offline access improve usability.</p>
                </div>
            </div>
        </section>
    );
}

export default Eduvalt;

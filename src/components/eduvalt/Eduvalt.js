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
                    <p>Here, we provide a comprehensive collection of E-books, study guides, reference materials, past papers, and meticulously crafted handmade notes to support students and professionals in their learning journey. Our platform is designed with user-friendly features such as advanced search functionality, personalized bookmarks, and offline access, ensuring seamless learning anytime, anywhere.</p>
                </div>
            </div>
        </section>
    );
}

export default Eduvalt;

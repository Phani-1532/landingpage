import React from 'react';
import './HumanLibrary.css';
import humanLibrary from '../../assets/eduvaltImages/human-library.svg';
import humanLibrary2 from '../../assets/eduvaltImages/human-library2.svg';

function HumanLibrary() {
    return (
        <section className="human-library">
            <h2>HUMAN LIBRARY</h2>
            <div className="human-library-container">
                
                {/* Text First (For Desktop) */}
                <div className="human-library-box text-box">
                    <p>
                        A feature that allows individuals to share their stories, discuss their challenges, 
                        and seek guidance from others. Using a matching algorithm, you will be paired with 
                        people who can offer support, insights, or advice, creating meaningful connections 
                        with those they may not know.
                    </p>
                </div>

                {/* Images Second (For Desktop) */}
                <div className="human-library-box image-box">
                    <div className="human-library-images">
                        <img src={humanLibrary} alt="humanLibrary" />
                        <img src={humanLibrary2} alt="humanLibrary2" />
                    </div>
                    <h5>A Community That Cares About What You Feel and Who You Are</h5>
                </div>

            </div>
        </section>
    );
}

export default HumanLibrary;

import React from 'react';
import './Events.css';
import eventsImage1 from '../../assets/eduvaltImages/eventsImage/events1.svg';
import eventsImage2 from '../../assets/eduvaltImages/eventsImage/eventsImage2.svg';
import eventsImage3 from '../../assets/eduvaltImages/eventsImage/eventsImage3.svg';
import eventsImage4 from '../../assets/eduvaltImages/eventsImage/eventsImage4.svg';

function Events() {
    
    
    return (
        <section className="events">
            <h2 className="events-title">EVENTS</h2>
            <div className="events-content">
                <div className="event-content">
                    <div className="events-left">
                        <div className="events-list">
                            <div className="event-item">
                                <img src={eventsImage1} alt="University of Delhi Event" className="event-image" />
                                
                                    <div className="event-item-text">
                                        <p>University of Delhi</p>
                                        <p>Jan 2025</p>
                                    </div>


                            </div>
                            <div className="event-item">
                            <div className="event-item-text">
                                        <p>India Tech Summit</p>
                                        <p>July 2025</p>
                                    </div>
                                <img src={eventsImage2} alt="India Tech Summit" className="event-image" />
                               
                            </div>
                            <div className="event-item">
                                <img src={eventsImage3} alt="UPES Debate Competition" className="event-image" />
                                <div className="event-item-text">
                                        <p>UPES</p>
                                        <p>Jan 2025</p>
                                    </div>
                            </div>
                            <div className="event-item">
                            <div className="event-item-text">
                                        <p>IIM</p>
                                        <p>Feb 2025</p>
                                    </div>
                                <img src={eventsImage4} alt="IIM Youth Summit" className="event-image" />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Events;

import React from 'react'
import './Events.css'
import events2 from '../../assets/eduvaltImages/events2.svg'
import events3 from '../../assets/eduvaltImages/events2.webp'

function Events() {
    return (
        <>
            <section className="events">
                <h2>EVENTS</h2>
                <div className='events-images'>
                    <div className='events-images-box'>
                        <div className='events-images-container'>
                            <img src={events3} alt="events" />
                            <img src={events2} alt="events2" />
                        </div>
                        <h5>Events and Competitions</h5>
                    </div>
                    <div className='events-images-box'>
                        <p>Events are organized gatherings for competitions, networking, entertainment, or knowledge sharing across various fields. They bring people together to exchange ideas, showcase talents, and foster collaborations. These events can be conferences, workshops, hackathons, festivals, or exhibitions, catering to different industries and interests. Whether virtual or in-person, they provide opportunities for learning, innovation, and community engagement.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Events
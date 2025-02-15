import React from 'react'
import './Eduvalt.css'
import eduvalt from '../../assets/eduvaltImages/edu-vault.svg'
import humanLibrary from '../../assets/eduvaltImages/human-library.svg'
import events from '../../assets/eduvaltImages/events.svg'
import guidedNest from '../../assets/eduvaltImages/guide-nest.svg'
import ngo from '../../assets/eduvaltImages/ngo.svg'

function Eduvalt() {
  return (
    <>
        <section className="edu-vault">
                <h2>EDU-VAULT</h2>
                <img src={eduvalt} alt="eduvalt" />
                <p>Your Path to Smarter Learning</p>
            </section>

            <section className="human-library">
                <h2>HUMAN LIBRARY</h2>
                <img src={humanLibrary} alt="humanLibrary" />
                <p>A feature that allows individuals to share their stories, experiences, and knowledge.</p>
            </section>

            <section className="events">
                <h2>EVENTS</h2>
                <img src={events} alt="events" />
                <p>Upcoming events and competitions.</p>
            </section>

            <section className="guided-nest">
                <h2>GUIDED NEST</h2>
                <img src={guidedNest} alt="guidedNest" />
                <p>Matches you with seniors or alumni for guidance.</p>
            </section>

            <section className="ngo">
                <h2>NGO</h2>
                <img src={ngo} alt="ngo" />
                <p>Building a better tomorrow by supporting communities today.</p>
            </section>

            <section className="goal">
                <h2>Our Goal</h2>
                <p>Unisphere's mission is to empower university students.</p>
            </section>
    </>
  )
}

export default Eduvalt
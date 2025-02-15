import React from 'react'
import './Eduvalt.css'
import eduvalt from '../../assets/eduvaltImages/edu-vault.svg'
import eduvalt2 from '../../assets/eduvaltImages/edu-vault2.svg'
import humanLibrary from '../../assets/eduvaltImages/human-library.svg'
import humanLibrary2 from '../../assets/eduvaltImages/human-library2.svg'
import events2 from '../../assets/eduvaltImages/events2.svg'
import events3 from '../../assets/eduvaltImages/events2.webp'
import guidedNest2 from '../../assets/eduvaltImages/guide-nest.svg'
import guidedNest from '../../assets/eduvaltImages/guide-nests2.svg'
import ngo2 from '../../assets/eduvaltImages/ngo.svg'
import ngo from '../../assets/eduvaltImages/ngo2.svg'

function Eduvalt() {
    return (
        <>
            <section className="edu-vault">
                <h2>EDU-VAULT</h2>
                <div className='edu-vault-images'>
                    <img src={eduvalt} alt="eduvalt" />
                    <img src={eduvalt2} alt="eduvalt2" />
                    <p>Here we provide E-books, study guides, reference materials, past papers, and handmade notes. Features like search, bookmarks, and offline access enhance usability. Users can easily access, organize, and personalize their study materials. Our platform ensures a seamless learning experience with intuitive navigation and smart recommendations.</p>
                </div>
                <h5>Your Path to Smarter Learning</h5>
            </section>

            <section className="human-library">
                <h2>HUMAN LIBRARY</h2>
                <div className='human-library-images'>
                    <div className='human-library-text'>
                        <p>A feature that allows individuals to share their stories, discuss their challenges, and seek guidance from others. Using a matching algorithm, you will be paired with people who can offer support, insights, or advice, creating meaningful connections with those they may not know</p>
                    </div>
                    <div className='human-library-image'>
                       <img src={humanLibrary} alt="humanLibrary" />
                       <img src={humanLibrary2} alt="humanLibrary2" />
                        <h5>A Community That Cares About What You Feels and Who You Are</h5>   
                    </div>
                </div>

            </section>

            <section className="events">
                <h2>EVENTS</h2>
                <div className='events-images'>
                    <img src={events3} alt="events" />
                    <img src={events2} alt="events2" />
                    <p>Events are organized gatherings for competitions, networking, entertainment, or knowledge sharing across various fields. They bring people together to exchange ideas, showcase talents, and foster collaborations. These events can be conferences, workshops, hackathons, festivals, or exhibitions, catering to different industries and interests. Whether virtual or in-person, they provide opportunities for learning, innovation, and community engagement.</p>
                </div>
                <h5>Events and Competitions</h5>
            </section>

            <section className="guided-nest">
                <h2>GUIDED NEST</h2>
                <div className='guided-nest-images'>
                    <div className='guided-nest-text'>
                        <p>Matches you with seniors, alumni, industry professionals, and advisors from different universities to support your academic and career development. It provides mentorship, guidance, and networking opportunities to help you achieve your goals. Gain valuable insights, career advice, and industry connections to enhance your learning journey. Engage in meaningful discussions, receive personalized support, and explore new opportunities for growth and success.</p>
                    </div>
                    <div className='guided-nest-image'>
                        <img src={guidedNest} alt="guidedNest" />
                        <img src={guidedNest2} alt="guidedNest2" />
                        <h5>A Journey of Learning, Led by Those Who’ve Been There</h5>
                    </div>
                </div>
                
            </section>

            <section className="ngo">
                <h2>NGO</h2>
                <div className='ngo-images'>
                    <img src={ngo} alt="ngo" />
                    <img src={ngo2} alt="ngo2" />
                    <p>This feature offers opportunities for volunteering with NGOs, internships, and social impact projects. It includes skill-based volunteering, event collaboration, and hands-on experiences to enhance professional and personal growth. Gain real-world exposure, develop leadership skills, and make a meaningful difference in communities. Expand your network, boost your resume, and contribute to causes that align with your passions.</p>
                </div>
                <h5>Building a Better Tomorrow by Supporting Communities Today</h5>
            </section>

            <section className="goal">
                <h2>Our Goal</h2>
                <p>Uniisphere’s mission is to empower university students by fostering meaningful connections, enhancing academic collaboration, and providing resources for personal and professional growth ensuring opportunities for all, regardless of where they graduated from.</p>
            </section>
        </>
    )
}

export default Eduvalt
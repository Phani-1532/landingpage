import React from 'react'
import './People.css'
import Himanshu from '../../assets/himanshu.svg';
import Tarun from '../../assets/tarun.svg';
import Abhishek from '../../assets/abhishek.svg';
import Kushbhoo from '../../assets/kushbhoo.svg';

function People() {
  return (
    <>
        <section className="people">
                <h1 id='id'>People</h1>
                <div className="people-list">
                    <div className="person person1">
                    <h2>"Himanshu"</h2>
                        <img src={Himanshu} alt="Manish" />
                        <div className="person-info">
                            <h3>Business Management</h3>
                            <p>Student at Maters Union  |  Building a Startup  |  Want to be a successful Entrepreneur  |  Have been a sports person.</p>
                        </div>
                    </div>
                    <div className="person person2">
                    <h2>"Tarun"</h2>
                        <img src={Tarun} alt="Manish" />
                        <div className="person-info">
                            <h3>Bachelors in UI/UX</h3>
                            <p>Student at university of Delhi  |  Works at Uniisphere  |  Previously worked in 3 different contionents  | Teamed up with Actress and Influencers.</p>
                        </div>
                    </div>
                    <div className="person person3">
                    <h2>"Abhishek"</h2>
                        <img src={Abhishek} alt="Manish" />
                        <div className="person-info">
                            <h3>B.Tech</h3>
                            <p>Student at GNOIT | Work at Uniisphere | want to be a data analyst | like to travel</p>
                        </div>
                    </div>
                    <div className="person person4">
                    <h2>"Kushbhoo"</h2>
                        <img src={Kushbhoo} alt="Manish" />
                        <div className="person-info">
                            <h3>MBA</h3>
                            <p>Student at UPES  |  Works as Marketing Manager  |  Want ot be a successful Marketing Expert  |  Likes to teravel a lot.</p>
                        </div>
                    </div>
                    
                </div>
            </section>
    </>
  )
}

export default People
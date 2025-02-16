import React from 'react';
import './GuideNest.css';
import guidedNest2 from '../../assets/eduvaltImages/guide-nest.svg';
import guidedNest from '../../assets/eduvaltImages/guide-nests2.svg';

function GuideNest() {
  return (
    <section className="guided-nest">
      <h2>GUIDED NEST</h2>
      <div className="guided-nest-container">
        <div className="guided-nest-box guided-nest-text">
          <p>
          Matches you with seniors or alumni or industry people and advisors from different universities to support your academic and career development.
          </p>
        </div>
        <div className="guided-nest-box guided-nest-image">
          <div className="guided-nest-images">
            <img src={guidedNest} alt="guidedNest" />
            <img src={guidedNest2} alt="guidedNest2" />
          </div>
          <h5>A Journey of Learning, Led by Those Who’ve Been There</h5>
        </div>
      </div>
    </section>
  );
}

export default GuideNest;

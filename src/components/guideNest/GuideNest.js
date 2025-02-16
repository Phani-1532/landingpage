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
            Matches you with seniors, alumni, industry professionals, and advisors from different universities to support your academic and career development. It provides mentorship, guidance, and networking opportunities to help you achieve your goals. Gain valuable insights, career advice, and industry connections to enhance your learning journey. Engage in meaningful discussions, receive personalized support, and explore new opportunities for growth and success.
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

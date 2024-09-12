import React from 'react';

export const Plans = () => {
  return (
    <div>
      <div className="Membership-plans">
        <span className="membership">Membership </span><span className="plans">Plans</span>
      </div>

      <div className="plans-container">
        <div className="plan-row">
          <div className="plan-details">
            <div className="plan-name">
              <span>Basic Plan</span>
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
            <div className="price-month">
              <span className="price">₹1000/</span><span className="month">Month</span>
            </div>
            <div className="feature">
              <span className="feature-highlight">2 Hours of Exercises</span>
              <p>Maximize your workout with two hours of dedicated exercise time each day. Tailor your sessions to your goals, whether it's strength, cardio, or flexibility. Push your limits and see real results!</p>
            </div>
            <div className="feature">
              <span className="feature-highlight">Free consultation to coaches</span>
              <p>Benefit from expert advice with free consultations by our professional coaches. Get personalized workout plans and tips tailored to your unique fitness needs. Start your journey with the right guidance!</p>
            </div>
            <div className="feature">
              <span className="feature-highlight">Access to Community</span>
              <p>Join a vibrant fitness community that motivates and inspires. Share your progress, exchange tips, and stay connected with like-minded individuals. Together, we achieve more!</p>
            </div>
            <div className="plan1-img">
              <div className="join-now">
                <a href="#" className="join">Join Now</a>
              </div>
              <img src="./images/plan1.png" className="basic-plan" alt="Basic Plan"/>
            </div>
          </div>
        </div>

        <div className="plan-row dark">
          <div className="plan-details">
            <div className="plan-name">
              <span>Premium Plan</span>
              <i className="fas fa-dumbbell"></i>
            </div>
            <div className="price-month">
              <span className="price">₹3500/</span><span className="month">Month</span>
            </div>
            <div className="feature">
              <span className="feature-highlight">5 Hours of Exercises</span>
              <p>Maximize your workout with five hours of dedicated exercise time each day. Tailor your sessions to your goals, whether it's strength, cardio, or flexibility. Push your limits and see real results!</p>
            </div>
            <div className="feature">
              <span className="feature-highlight">Free Consultation from coaches</span>
              <p>Benefit from expert advice with free consultations by our professional coaches. Get personalized workout plans and tips tailored to your unique fitness needs. Start your journey with the right guidance!</p>
            </div>
            <div className="feature">
              <span className="feature-highlight">Access to Supplements</span>
              <p>Enhance your fitness journey with access to high-quality supplements. Fuel your workouts and recovery with the right nutrients. Enjoy exclusive deals on the products that support your goals!</p>
            </div>
            <div className="plan2-img">
              <div className="join-now">
                <a href="#" className="join">Join Now</a>
              </div>
              <img src="./images/plan2.png" className="premium-plan" alt="Premium Plan"/>
            </div>
          </div>
        </div>

        <div className="plan-row">
          <div className="plan-details">
            <div className="plan-name">
              <span>PRO Plan</span>
              <i className="fas fa-running"></i>
            </div>
            <div className="price-month">
              <span className="price">₹5000/</span><span className="month">Month</span>
            </div>
            <div className="feature">
              <span className="feature-highlight">8 Hours of Exercises</span>
              <p>Maximize your workout with eight hours of dedicated exercise time each day. Tailor your sessions to your goals, whether it's strength, cardio, or flexibility. Push your limits and see real results!</p>
            </div>
            <div className="feature">
              <span className="feature-highlight">Consultation from Private coaches</span>
              <p>Benefit from expert advice with free consultations by our professional Private coaches. Get personalized workout plans and tips tailored to your unique fitness needs. Start your journey with the right guidance!</p>
            </div>
            <div className="feature">
              <span className="feature-highlight">Access to SPA</span>
              <p>Unwind after your workout with access to our luxurious spa. Relax your muscles, reduce stress, and rejuvenate your body. Enjoy a holistic approach to fitness and wellness!</p>
            </div>
            <div className="plan1-img">
              <div className="join-now">
                <a href="#" className="join">Join Now</a>
              </div>
              <img src="./images/plan3.png" className="basic-plan" alt="Pro Plan"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

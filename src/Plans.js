import React from 'react'

export const Plans = () => {
  return (
    <div>
        <div class="Membership-plans"><span class="membership">Membership </span><span class="plans">Plans</span></div>

        <div class="plans-container">
            <div class="plan-row">
                <div class="plan-details">
                    <div class="plan-name">
                        <span>Basic Plan</span>
                        <i class="fa-solid fa-heart-pulse"></i>
                    </div>
                    <div class="price-month">
                        <span class="price">₹1000/</span><span class="month">Month</span>
                    </div>
                    <div class="feature">
                        <span class="feature-highlight">2 Hours of Exercises</span>
                        <p>Maximize your workout with two hours of dedicated exercise time each day. Tailor your sessions to your goals, whether it's strength, cardio, or flexibility. Push your limits and see real results!</p>
                    </div>
                    <div class="feature">
                        <span class="feature-highlight">Free consultation to coaches</span>
                        <p>Benefit from expert advice with free consultations by our professional coaches. Get personalized workout plans and tips tailored to your unique fitness needs. Start your journey with the right guidance!</p>
                    </div>
                    <div class="feature">
                        <span class="feature-highlight">Access to Community</span>
                        <p>Join a vibrant fitness community that motivates and inspires. Share your progress, exchange tips, and stay connected with like-minded individuals. Together, we achieve more!</p>
                    </div>
                    <div class="plan1-img">
                    <div class="join-now">
                        <a href="#" class="join">Join Now</a>
                    </div>
                    <img src="./images/plan1.png" class="basic-plan"/>
                    </div>
                </div>
                
            </div>

            <div class="plan-row dark">
                <div class="plan-details">
                    <div class="plan-name">
                        <span>Premium Plan</span>
                        <i class="fas fa-dumbbell"></i>
                    </div>
                    <div class="price-month">
                        <span class="price">₹3500/</span><span class="month">Month</span>
                    </div>
                    <div class="feature">
                        <span class="feature-highlight">5 Hours of Exercises</span>
                        <p>Maximize your workout with five hours of dedicated exercise time each day. Tailor your sessions to your goals, whether it's strength, cardio, or flexibility. Push your limits and see real results!</p>
                    </div>
                    <div class="feature">
                        <span class="feature-highlight">Free Consultation from coaches</span>
                        <p>Benefit from expert advice with free consultations by our professional coaches. Get personalized workout plans and tips tailored to your unique fitness needs. Start your journey with the right guidance!</p>
                    </div>
                    <div class="feature">
                        <span class="feature-highlight">Access to Supplements</span>
                        <p>Enhance your fitness journey with access to high-quality supplements. Fuel your workouts and recovery with the right nutrients. Enjoy exclusive deals on the products that support your goals!</p>
                    </div>
                    <div class="plan2-img">
                    <div class="join-now">
                        <a href="#" class="join">Join Now</a>
                    </div>
                    <img src="./images/plan2.png" class="premium-plan"/>
                    </div>
                </div>
                
            </div>

            <div class="plan-row">
                <div class="plan-details">
                    <div class="plan-name">
                        <span>PRO Plan</span>
                        <i class="fas fa-running"></i>
                    </div>
                    <div class="price-month">
                        <span class="price">₹5000/</span><span class="month">Month</span>
                    </div>
                    <div class="feature">
                        <span class="feature-highlight">8 Hours of Exercises</span>
                        <p>Maximize your workout with eight hours of dedicated exercise time each day. Tailor your sessions to your goals, whether it's strength, cardio, or flexibility. Push your limits and see real results!</p>
                    </div>
                    <div class="feature">
                        <span class="feature-highlight">Consultation from Private coaches</span>
                        <p>Benefit from expert advice with free consultations by our professional Private coaches. Get personalized workout plans and tips tailored to your unique fitness needs. Start your journey with the right guidance!</p>
                    </div>
                    <div class="feature">
                        <span class="feature-highlight">Access to SPA</span>
                        <p>Unwind after your workout with access to our luxurious spa. Relax your muscles, reduce stress, and rejuvenate your body. Enjoy a holistic approach to fitness and wellness!</p>
                    </div>
                    <div class="plan1-img">
                    <div class="join-now">
                        <a href="#" class="join">Join Now</a>
                    </div>
                    <img src="./images/plan3.png" class="basic-plan"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

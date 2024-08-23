import React from 'react'
import './Subscription.css'

const Subscription = () => {
  return (
    <section className="subscription-section">
        <h3>Looking for a better company for your next project?</h3>
        <div className="email">
          <input type="email" placeholder="Enter your email" className="email-holder"/>
          <button className="subscribe-btn"><b>Subscribe Now</b></button>
        </div>
        <div className="sub-detail">
          <p>Subscribe to get the latest updates and offers.</p>
        </div>
    </section>
  )
}

export default Subscription
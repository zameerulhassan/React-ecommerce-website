import React from 'react'

const Hero = ({children}) => {
  return (
    <div className="hero">
    <div className="banner">
    <h1>React Stripe Strapi</h1>
    <p>hard work = /\ smart worder</p>
    {children}
    </div>
    </div>
  )
}

export default Hero

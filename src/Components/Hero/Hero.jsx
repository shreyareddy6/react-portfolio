import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Shreya Yerragudi,</span> software engineer based in USA</h1>
        <p>I'm a fullstack developer from Orlando withh 3 years of experience in Accenture</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
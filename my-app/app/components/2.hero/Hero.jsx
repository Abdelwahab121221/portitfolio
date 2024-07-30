import React from 'react'
import './Hero.css'
import '../../../public/avatar-02.png'
import '../../../public/activity-03.png'
import dev from '../../../public/animations/dev.json'
import Lottie from 'lottie-react';

function Hero() {
    return (
        <section className='Hero'>
            <div className="content">
                <div className="img">
                    <img src="avatar-02.png" alt="My-photo" />
                </div>
                <div className="text">
                    <h2>If you want build your own website and you search about programmer you are in right place.</h2>
                    <p>I'm a full Stack Developer , I work with international frameworks like React and Django</p>
                </div>
                <div className="icons">
                    <a href="" target='_blank'><i className="fa-brands fa-facebook loading"></i></a> 
                    <a href="" target='_blank'><i className="fa-brands fa-instagram loading"></i></a>
                    <a href="" target='_blank'><i className="fa-brands fa-github loading"></i></a>
                    <a href="" target='_blank'><i className="fa-brands fa-linkedin loading"></i></a>
                </div>
            </div>
            <div className="animation">
            <Lottie animationData={dev}/> 
                
            </div>
        </section>
    )
}

export default Hero
'use client'
import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import './contact.css'
import animation from '../../../public/animations/email.json'
import Lottie from 'lottie-react';
function Contact() {
    const [state, handleSubmit] = useForm("xqazerqo");
    if (state.succeeded) {
        return <p className='contact-message'>Thanks for joining!</p>;
    }
    return (
        <div id='contact' className='contact'>
            <div className="title">
                <div className="head">
                    <i class="fa-solid fa-envelope"></i>
                    <h2>Contact Us</h2>
                </div>
                <p>lorem This is simple project from my projects .</p>
            </div>
            <div className="content">
                <form onSubmit={handleSubmit} className="email">
                    <div className="email-field">
                        <label htmlFor='email'>
                            Enter Email:
                        </label>
                            <input type="text" name='email' placeholder="Your Email" />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                    </div>
                    <div className="message-field">
                        <label htmlFor='message'>
                            Enter Essay:
                        </label>
                            <textarea rows={6} name='message' placeholder="Your Message" />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                    </div>
                    <input type="submit" value='send' disabled={state.submitting} />
                </form>
                <div className="animation">
                    <Lottie
                        style={{ width: 300 , height:300}}
                        animationData={animation}
                        className='animation'
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact
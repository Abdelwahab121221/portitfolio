'use client'
import React, { useEffect, useState } from 'react'
import './Header.css'
function Header() {
    const [showModel ,setShowModel] = useState(false)
    const [mode, setMode] = useState(() => {
        return window.localStorage.getItem('theme') || 'dark'
    })
    useEffect(() => {
        document.body.classList.remove(mode === 'dark' ? 'light' : 'dark')
        window.localStorage.setItem('theme', mode)
        document.body.classList.add(mode)
    },[mode])
    return (
        <>
            {showModel && (
            <div className="overlay">
                <ul>
                    <li onClick={() => {
                            setShowModel(false)
                    }} className="exit"><button><i className='fa-solid fa-close'></i></button></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Speaking</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </div>                
            )}
            <header>
                <nav>
                    <button onClick={() => {
                        setShowModel(true)
                    }} className="show-model loading-left">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className='loading'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Speaking</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <button onClick={() => {
                        setMode(mode === 'dark' ? 'light':'dark')
                    }} className="icon loading-right">{mode === 'dark' ? <i className="fa fa-moon"></i>:<i class="fa-regular fa-sun"></i>}</button>
                </nav>
            </header>        
        </>
    )
}

export default Header
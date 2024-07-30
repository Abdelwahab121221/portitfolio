'use client'
import Header from './components/1.header/Header';
import Hero from './components/2.hero/Hero';
import Main  from './components/3.main/Main';
import Contact from './components/4.contact/Contact';
import Footer from './components/5.footer/Footer';
import styles from './page.module.css'
import './all.css'
import { useEffect, useState } from 'react';

function Shop() {
    // Add smooth scrolling effect to up button
    const [isAvailable,setIsAvailable] = useState(false)
    function check_scroll() {
        if (window.scrollY > 100) {
            setIsAvailable(true)
        } else {
            setIsAvailable(false)
        }
    }
    function scroll_top() {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', check_scroll)
    },[])
    return (
        <div className={styles.container}>
            <Header />
            <Hero />
            <div className={styles.line}></div>
            <Main />
            <div className={styles.line}></div>
            <Contact />
            <div className={styles.line}></div>
            <Footer />
            {isAvailable && (
                <a onClick={scroll_top} scroll={false}>
                    <span className="up-button"><i class="fa-solid fa-up-long"></i></span>
                </a>
            )}
        </div>
    )
}
export default Shop;
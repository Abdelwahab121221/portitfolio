import React from 'react'
import './footer.css'
function Footer() {
    return (
        <footer>
            <ul className='footer loading'>
                <li className='footer-li'><a href="#">About</a></li>
                <li className='footer-li'><a href="#">Articles</a></li>
                <li className='footer-li'><a href="#">Projects</a></li>
                <li className='footer-li'><a href="#">Speaking</a></li>
                <li className='footer-li'><a href="#">Contact</a></li>
            </ul>
            <span>
                &copy; for abdelwahab
            </span>
        </footer>
    )
}

export default Footer
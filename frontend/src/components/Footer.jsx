// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <Link 
                        to="/homepage" 
                        className={`nav-link px-2 text-body-secondary ${styles.navLink}`}
                    >
                        Home
                    </Link>                    
                </li>
                <li className="nav-item">
                    <Link 
                        to="/" 
                        className={`nav-link px-2 text-body-secondary ${styles.navLink}`}
                    >
                        Landing
                    </Link>                       
                </li>
                <li className="nav-item">
                    <Link 
                        to="/login" 
                        className={`nav-link px-2 text-body-secondary ${styles.navLink}`}
                    >
                        Sign Up
                    </Link>                       
                </li>
                <li className="nav-item">
                    <Link 
                        to="/about" 
                        className={`nav-link px-2 text-body-secondary ${styles.navLink}`}
                    >
                        Detalles
                    </Link>                       
                </li>
            </ul>
            <p className="text-center text-body-secondary">
                2025 Esteban Fernández
            </p>
        </footer>
    )
}

export default Footer

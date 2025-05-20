import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = 80; // Height of fixed navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.navbarLogo}>
                    <img src="/assets/sph-logo.png" alt="Logo" />
                </div>                <div className={styles.navbarLinks}>
                    <button onClick={() => scrollToSection('panel')} className={styles.navButton}>Home</button>
                    <button onClick={() => scrollToSection('hackathon')} className={styles.navButton}>Hackathon</button>
                    <button onClick={() => scrollToSection('panel')} className={styles.navButton}>Panel</button>
                    <button onClick={() => scrollToSection('pitches')} className={styles.navButton}>Pitches</button>
                    <button onClick={() => scrollToSection('footer')} className={styles.navButton}>Contacts</button>
                </div>
            </nav>
            <div className={styles.hero}>
                <div className={styles.heroImage}>
                    <img src="/assets/innovation.webp" alt="Hackathon" />
                </div>
            </div>
        </div>
    )
}

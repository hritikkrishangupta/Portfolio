import React,{ useState } from 'react'
import styles from './Navbar.module.css'
import menuicon from '../../assets/nav/menuIcon.png'
import closeicon from '../../assets/nav/closeIcon.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img 
            className={styles.menuBtn} 
            src={menuOpen ? closeicon : menuicon} 
            alt='menu-button'
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
             onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
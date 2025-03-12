import React from 'react'
import email from '../../assets/contact/emailIcon.png'
import github from '../../assets/contact/githubIcon.png'
import linkedin from '../../assets/contact/linkedinIcon.png'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={email} alt="Email icon"/>
                <a href="mailto:hritikkrishangupta@gmail.com">hritikkrishangupta@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={linkedin} alt="LinkedIn icon"/>
                <a href='https://www.linkedin.com/in/hritik-krishan-gupta-3463681a5/'>linkedin.com/in/hritik-krishan-gupta</a>
            </li>
            <li className={styles.link}>
                <img src={github} alt="Github icon"/>
                <a href='https://github.com/hritikkrishangupta'>github.com/hritikkrishangupta</a>
            </li>
        </ul>

    </footer>
  )
}

export default Contact
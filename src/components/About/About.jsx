import React from 'react'
import about from '../../assets/about/aboutImage.png'
import cursor from '../../assets/about/cursorIcon.png'
import server from '../../assets/about/serverIcon.png'
import ui from '../../assets/about/uiIcon.png'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img
                src={about}
                alt="Me sitting with a laptop"
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={cursor} alt="Cursor"/>
                    <div className={styles.aboutItemtext}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a frontend developer with experience in building responsive and optimized sites.  
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={server} alt="Server"/>
                    <div className={styles.aboutItemtext}>
                        <h3>Backend Developer</h3>
                        <p>
                            I have experience developing fast and optimized Backend system and APIs.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={ui} alt="UI"/>
                    <div className={styles.aboutItemtext}>
                        <h3>UI Designer</h3>
                        <p>
                            I have designed multiple landing pages and have created design systems as well.   
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
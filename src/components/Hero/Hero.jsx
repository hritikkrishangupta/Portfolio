import React from 'react'
import styles from './Hero.module.css'
import Profile from '../../assets/hero/heroImage.png'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Hritik</h1>
            <p className={styles.description}>
                I'm a Passionate React Developer Fresher with expertise in JavaScript, React.js, HTML, and CSS. Skilled in building responsive UIs using React Hooks and Redux. Eager to learn, solve problems, and contribute to innovative projects in a dynamic development environment. 
            </p>
            <a href="#contact" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={Profile} alt='Hero Image' className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero
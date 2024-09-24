import React from 'react'
import styles from "./Hero.module.css"
import {getImageUrl} from "../../utils"

export const Hero = () => {
  return ( 
    <section className= {styles.container}>
        <div className={styles.content}>
            <h1 className= {styles.title}>Hi, I'm Maymunah</h1>
            <p className={styles.intro}>
                I'm a computer science major at Georgia Tech with experience in full-stack development, data analysis, and research. I thrive in environments that challenge me to think creatively. Reach out if you would like to learn more!
            </p>
            <a href="mailto: maymunah.showkat@gmail.com" className= {styles.email}>Contact Me</a>
        </div>
        <img src={getImageUrl("pfp.png")}  alt="hero-img" className={styles.heroImg} />
        <div className= {styles.topBlur} />
        <div className= {styles.bottomBlur}/>
  </section>
  );
};

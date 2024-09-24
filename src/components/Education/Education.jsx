import React from 'react'
import styles from "./Education.module.css"
import {getImageUrl} from "../../utils"

export const Education = () => {
  return (
    <section className={styles.container} id = "education">
        <h2 className={styles.education}>Education</h2>
        <div className={styles.content}>
        <div className={styles.school}>
            <img src={getImageUrl("tech.JPEG")}  alt="tech-img" className={styles.techImg} />
                <div className={styles.schoolInfo}>
                    <h2 className={styles.title}>Georgia Institute of Technology</h2>
                    <p>Bachelor of Science (BS) in Computer Science</p>
                    <p>Expected Graduation : December 2024</p>
                    <p>GPA : 3.54 / 4.0</p>
                </div>
            </div>
            <div className={styles.coursework}>
            {/* <h2>Coursework</h2> */}
            <div className={styles.courses}>
                <div className= {styles.newCourse}>
                    <p className={styles.courseName}>Object Oriented Programming</p>
                    <ul>
                        <li>Encapsulation</li>
                        <li>Inheritance</li>
                        <li>Polymorphism</li>
                        <li>Abstraction</li>
                    </ul>
                </div>
                <div  className= {styles.newCourse}>
                    <p className={styles.courseName}>Data Structures and Algorithms</p>
                    <ul>
                        <li>Abstract Data Types</li>
                        <li>Low-level Data Structures</li>
                        <li>Data Storage</li>
                        <li>Time Complexities</li>
                    </ul>
                </div>
                <div className= {styles.newCourse}>
                    <p className={styles.courseName}>Information Technology</p>
                    <ul>
                        <li>Data Visualization</li>
                        <li>Statistical Computing</li>
                        <li>Dataset Handling</li>
                        <li>Data Analysis</li>
                    </ul>
                </div>
                <div className= {styles.newCourse}>
                <p className={styles.courseName}>Media Architectures</p>
                    <ul>
                        <li>C Programming</li>
                        <li>Game Development</li>
                        <li>Data Representation</li>
                        <li>Von Neumann Model</li>
                    </ul>
                </div>
                <div className= {styles.newCourse}>
                <p className={styles.courseName}>User Interface Design</p>
                    <ul>
                        <li>Research Analysis</li>
                        <li>Prototyping</li>
                        <li>Usability Evaluation</li>
                        <li>User-friendly Design</li>
                    </ul>
                </div>
                <div className= {styles.newCourse}>
                <p className={styles.courseName}>Computer Graphics</p>
                    <ul>
                        <li>OpenGL Programming</li>
                        <li>Procedural Modeling</li>
                        <li>GPU Rendering</li>
                        <li>Animation</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </section>
  );
};

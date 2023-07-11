import React from "react";

import SocialLinks from "./socialLinks";

import styles from "@/assets/css/components/landing.module.css"

const Landing = () => {
    return (
        <div className={styles.landing}>
            <SocialLinks />
            <div className={styles.content}>
                <p className={styles.header}>Hey, I'm Sunil Prajapati</p>
                <p className={styles.message}>An experienced full stack engineer building full scale web applications</p>
                <a className={styles.learnMore} href="#about">Learn More Below</a>
            </div>
        </div>
    )
}

export default Landing;

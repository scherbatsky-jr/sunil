import React from "react";

import styles from "@/assets/css/components/contact.module.scss";

const Contact = () => {
    return (
        <div className={styles.contact} id="contact">
            <h1>Contact Me</h1>
            <form className={styles.contactForm}>
                <div className={styles.formElement}>
                    <label>Full Name</label>
                    <input type="text" placeholder="Full Name" />
                </div>
                <div className={styles.formElement}>
                    <label>Email</label>
                    <input type="email" placeholder="Email"></input>
                </div>
                <div className={styles.formElement}>
                    <label>Message</label>
                    <textarea placeholder="Enter your message"/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact;

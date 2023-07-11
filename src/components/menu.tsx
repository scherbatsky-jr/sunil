import React from "react";
import styles from "@/assets/css/components/menu.module.css";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menuImage}>
                <img
                    className={styles.image}
                    src="@/assets/images/sunil.jpg"
                />
                <p className={styles.name}>Sunil Prajapati</p>
            </div>
            <div className={styles.menuList}>
                <a className={styles.menuItem} href="">Home</a>
                <a className={styles.menuItem} href="#about">About</a>
                <a className={styles.menuItem} href="#projects">Projects</a>
                <a className={styles.menuItem} href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Menu;

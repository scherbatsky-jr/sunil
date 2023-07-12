'use client';

import React, { useState } from "react";

import { Icon } from "@iconify/react";

import styles from "@/assets/css/components/menu.module.scss";

const Menu = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const onMenuClick = () => {
        setShowDropdown(!showDropdown)
    }
    
    return (
        <div className={styles.menu}>
            <div className={styles.menuBar}>
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
                <div className={styles.menuButton}>
                    <button onClick={onMenuClick}>
                        <Icon icon={showDropdown ? "charm:cross" : "cil:hamburger-menu"} />
                    </button>
                </div>
            </div>
            {
                showDropdown &&
                    <div className={styles.menuDropdown}>
                        <a className={styles.menuItem} href="">Home</a>
                        <a className={styles.menuItem} href="#about">About</a>
                        <a className={styles.menuItem} href="#projects">Projects</a>
                        <a className={styles.menuItem} href="#contact">Contact</a>
                    </div>
            }
        </div>
    )
}

export default Menu;

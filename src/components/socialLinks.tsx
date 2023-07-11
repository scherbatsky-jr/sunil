'use client'

import React from "react";

import { Icon } from '@iconify/react';

import styles from "@/assets/css/components/socialLInks.module.scss"

const SocialLinks = () => {
    const links = [
        {
    
          icon: "bx:phone-call"
        },
        {
          icon: "charm:mail"
        },
        {
          address: "https://github.com/scherbatsky-jr",
          icon: "akar-icons:linkedin-box-fill"
        },
        {
          address: "https://www.linkedin.com/in/scherbatsky-jr/",
          icon: "akar-icons:github-fill"
        }
      ]

    return (
        <div className={styles.links}>
            {
                links.map((link, index) => {
                  return <a
                    className={styles.link}
                    href={link.address}
                    key={index}
                    target="_blank"
                  >
                    <Icon icon={link.icon} />
                  </a>
                })
            }
        </div>
    )
}

export default SocialLinks
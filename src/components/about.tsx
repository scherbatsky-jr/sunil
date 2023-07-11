import React from "react";

import ExpertiseSection from "./expertiseSection";

import styles from "@/assets/css/components/about.module.scss";

const About = () => {
    const sections = [
        {
          label: "Languages",
          icons: [
            'vscode-icons:file-type-typescript-official',
            'logos:javascript',
            'vscode-icons:file-type-python',
            'logos:java',
          ]
        },
        {
          label: "Framework",
          icons: [
            'vscode-icons:file-type-vue',
            'logos:react',
            'logos:laravel',
          ]
        },
        {
          label: "Database",
          icons: [
            "logos:mysql"
          ]
        },
        {
          label: "Devops",
          icons: [
            'logos:docker-icon',
            'logos:aws'
          ]
        },
        {
          label: "Others",
          icons: [
            'logos:android-vertical',
            'carbon:machine-learning-model'
          ]
        }
    ]

    return (
        <div className={styles.about} id="about">
            <div>
                <h1>About Me</h1>
                <p>
                    I am an experienced full stack engineer who has built large scale web appliations for companies per their need.
                    I have worked as a Senior Engineer overseeing a well rounded team with a test driven developement and agile approach in my previous company.
                    As of now, I am working as a freelancer providing solutions for frontend, backend, databases and devops. 
                </p>
            </div>
            <div>
                <h1>Expertise</h1>
                <div>
                    {
                    sections.map((section, index) => {
                        return <ExpertiseSection
                        {...section}
                        key={'expertise-' + index}
                        />
                    })
                    }     
                </div>
            </div>
        </div>
    )
}

export default About

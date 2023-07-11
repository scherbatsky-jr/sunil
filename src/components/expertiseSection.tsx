'use client'

import { Icon } from "@iconify/react"

import styles from "@/assets/css/components/section.module.scss"

type SectionProp = {
  label: string
  icons: Array<string>
}

const ExpertiseSection = (props: SectionProp) => {
  return (
    <>
      <div className={styles.section}>
        <h2>{props.label}</h2>
        <div className={styles.section__grid}>
          {
            props.icons?.map((icon, index) => {
              return <Icon
                  className={styles.section__icon}
                  icon={icon}
                  key={'label-'+index}
                />
            })
          }
        </div>
      </div>
    </>
  )
}

export default ExpertiseSection

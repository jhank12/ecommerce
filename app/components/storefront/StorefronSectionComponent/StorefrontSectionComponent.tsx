import React from 'react'
import styles from "./StorefrontSectionComponent.module.css"

export default function StorefrontSectionComponent({children, sectionId = null}) {
  
  return (
    <section className={styles.storefrontSection} id={sectionId ? sectionId : ""}>{children}</section>
  )
}

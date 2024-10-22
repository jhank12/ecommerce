import React from 'react'
import 'remixicon/fonts/remixicon.css'


import styles from "./IconContainer.module.css";

export default function IconContainer({icon}) {
  return (
    <div className={styles.iconContainer}>
        <i className={icon} />
    </div>
  )
}

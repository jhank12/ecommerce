import 'remixicon/fonts/remixicon.css'

import React from 'react'

import ColorCircle from '@/app/components/ColorCircle/ColorCircle'

import styles from "./ProductListingColorCircle.module.css"

export default function ProductListingColorCircle({color, updateUrl, colorActive}) {

  return (
    <div className={colorActive ? styles.circleContainerActive : styles.circleContainer} onClick={updateUrl}>
        <ColorCircle color={color} size={"30px"} updateUrl={updateUrl} />
        {/* {colorActive &&  */}
            <i className="ri-check-line" />
        {/* } */}
    </div>
  )
}

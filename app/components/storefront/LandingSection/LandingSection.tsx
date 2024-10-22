import React from 'react'
import Link from '@/node_modules/next/link'

import styles from "./LandingSection.module.css"

export default function LandingSection() {
  return (
    <section className={styles.landing}>
          <div className={styles.landingText}>
            <h1>Summer styles <br /> are finally here</h1>
            <p>This year, our new summer collection will be your haven from the world's harsh elements.</p>
            
            <Link href="shop-all" replace>
              <button className={styles.btnMain}>
                Shop Now
              </button>
            </Link>
          </div>
          
          <img src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/cozy-comfort.jpg" alt="cozy-comfort" />

      </section>
  )
}

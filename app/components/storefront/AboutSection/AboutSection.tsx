import React from 'react'
import IconContainer from '../../IconContainer/IconContainer'

import StorefrontSectionComponent from '../StorefronSectionComponent/StorefrontSectionComponent'

import styles from "./AboutSection.module.css"

export default function AboutSection() {
  return (
    <StorefrontSectionComponent>
        <section className={styles.aboutSection}>
            <div className={styles.aboutSectionTopRow}>
                <p>Elevate Your Experience</p>
                <h2>Our Commitment to Exceptional Service</h2>

                <p>We pride ourselves on a foundation of exceptional customer service, 
                    where every interaction is a testament to our dedication to excellence.</p>
            </div>
        

        <div className={styles.aboutFeaturesContainer}>

                <div className={styles.aboutFeatureContainer}>
                    

                    <IconContainer icon="ri-truck-line" />


                    <p>Complimentary Shipping</p>

                    <p>Enjoy the convenience of free shipping for all orders. We believe in transparent pricing, and the price you see is the price you pay -- no surprise fees.</p>
                    
                </div>

                <div className={styles.aboutFeatureContainer}>
                    <IconContainer icon="ri-shield-check-line" />
                    {/* <div className={styles.iconContainer}>
                        <i className="ri-shield-check-line"></i>
                    </div> */}

                    <p>2-Year Quality Promise</p>

                    <p>
                        Shop with confidence knowing that we stand behind our products. Should any issue arise within the first two years, rest assured we're here to help with a hassle-free replacement.
                    </p>
                    
                </div>

                <div className={styles.aboutFeatureContainer}>
                    
                    <IconContainer icon="ri-exchange-line" />

                    <p>Easy Exchanges</p>

                    <p>If your purchase isn't quite right, pass it on to a friend who might love it, 
                        and let us know. We're happy to facilitate an exchange 
                        to ensure you have the perfect item to complement your lifestyle.</p>
                    
                </div>


        </div>
        </section>


    </StorefrontSectionComponent>
  )
}

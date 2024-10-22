import React from 'react'

import StorefrontSectionComponent from '../StorefronSectionComponent/StorefrontSectionComponent'
import styles from "./Footer.module.css"

import Link from '@/node_modules/next/link'

export default function Footer() {
  return (
        <footer className={styles.footer}>

            <div className={styles.newsletterInputContainer}>
                <div>
                    <p>Join our newsletter</p>
                    <p>We'll send you a nice letter once per week. No spam.</p>
                </div>

                <form action="">
                    <input type="email" placeholder="Enter your email"/>
                    <button className={styles.subscribeBtn}>Subscribe</button>
                </form>
            </div>

            <div className={styles.footerInfo}>
                <div className={styles.footerInfoLeft}>
                    <a href="#siteContainer">StyleNest</a>

                    <p>Craft stunning style journeys that weave more joy into every thread.</p>

                </div>
                
                <div className={styles.footerLinksSection}>
                
                    <div className={styles.footerLinksContainer}>
                        <p>SHOP CATEGORIES</p>
                        <ul>
                            <li>
                                Unisex
                            </li>
                            <li>
                                Women
                            </li>
                            <li>
                                Men
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footerLinksContainer}>
                        <p>SHOP COLLECTIONS</p>
                        <ul>
                            <li>
                                Latest Arrivals
                            </li>
                            <li>
                                Urban  Oasis
                            </li>
                            <li>
                                Cozy Comfort
                            </li>
                            <li>
                                Fresh Fusion
                            </li>
                        </ul>
                    </div>
                </div>

                

                
            
            </div>

            <div className={styles.footerSocials}>
                <p><i class="ri-copyright-line"></i> 2024 StyleNest Inc. All rights reserved.</p> 

                <div className={styles.socialIcons}>
                    <i className="ri-youtube-line"></i>
                    <i className="ri-instagram-line"></i>
                    <i className="ri-facebook-box-line"></i>
                    <i className="ri-github-line"></i>
                    <i className="ri-twitter-x-line"></i>
                </div>
                

            </div>
        
        </footer>
  )
}

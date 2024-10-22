'use client';

import React, {useState} from "react";

import styles from "./QualitySection.module.css";

import IconContainer from "@/app/components/IconContainer/IconContainer";

import StorefrontSectionComponent from "@/app/components/storefront/StorefronSectionComponent/StorefrontSectionComponent";

export default function QualitySection() {

  
  const tabs = ["Sustainability", "Comfort", "Durability", "Versatility"];
  
  const [ selectedTab, setSelectedTab ] = useState(tabs[0]);

  return (
    <StorefrontSectionComponent>
      <h2>Discover timeless elegance</h2>
      <p className={styles.qualitySectionParagraph}>
        Step into a world where quality meets quintessential charm with our
        collection. Every thread weaves a promse of unparalleled quality,
        ensuring that each garment is not just a part of your wardrobe, but a
        piece of art. Here's the essence of what makes our apparel the hallmark
        for those with an eye for excellence and a heart for the environment.
      </p>

      <div className={styles.tabs}>
        <ul>
          {tabs.map(tab => {
            return (
              <li 
                className={selectedTab === tab ? styles.activeTab : ""} 
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </li>
            )
          })}
        </ul>

        <div className={styles.tabContent}>

          <div className={styles.imgTestDiv}>test</div>

          <div className={styles.tabContentText}>
            <h4>{selectedTab}</h4>
            <p className={styles.tabContentTextDesc}>
              With our sustainable approach, we curate clothing that makes a
              statement of care-care for the planet, and for the art of fashion
            </p>

            <div className={styles.tabContentTags}>
              <div className={styles.tabContentTag}>
                <IconContainer icon="ri-shield-check-line" />
               
                <p>Recycled Materials</p>
              </div>
              <div className={styles.tabContentTag}>
                <IconContainer icon="ri-shield-check-line" />
                <p>Low Impact Dye</p>
              </div>
              <div className={styles.tabContentTag}>
                <IconContainer icon="ri-shield-check-line" />
                <p>Carbon Neutral</p>
              </div>
              <div className={styles.tabContentTag}>
                
                <IconContainer icon="ri-shield-check-line" />
                <p>Water Conservation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StorefrontSectionComponent>
  );
}

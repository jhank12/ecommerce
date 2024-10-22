import React from 'react'
import StorefrontSectionComponent from '../StorefronSectionComponent/StorefrontSectionComponent'
import { promises as fs } from 'fs';

import styles from "./OurCollections.module.css"

export default async function OurCollections() {
  const collectionsReq = await fs.readFile(process.cwd() + '/app/data/collections.json', 'utf-8');

  const collections = JSON.parse(collectionsReq);

  return (
    <StorefrontSectionComponent sectionId="collections">
      <header className={styles.storefrontHeader}>
        <h3>
          Our Collections  
        </h3> 
      </header>

      <div className={styles.collectionsGrid}>

        {collections.map(collection => {
          
          const { 
            collection_id: collectionId, 
            name, 
            description, 
            image_url: imageURL 
          } = collection;

          return (
            <div key={collectionId} className={styles.collectionCell}>
              <img src={imageURL} alt={name} />
              <div className={styles.imageOverlay} />
              
              <div className={styles.collectionCellText}>
                <p>{name}</p>
                <p>{description}</p>
              </div>
            </div>
          )
        })}


      </div>
    </StorefrontSectionComponent>
  )
}

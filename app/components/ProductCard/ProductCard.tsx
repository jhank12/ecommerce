
import React from 'react'
import { promises as fs } from 'fs';

import styles from "./ProductCard.module.css"

import Image from '@/node_modules/next/image';

import getProductData from '@/app/lib/getProductData';
import ColorCircle from '../ColorCircle/ColorCircle';

export default async function ProductCard( {productId} ) {
  

  const productData = await getProductData(productId);

  const { productName, productMainImageURL, itemPrices, itemColors } = productData
  
  return (
    <div className={styles.productCard}>
        <img src={productMainImageURL} alt={`${productId}-1`} />
      
      
        <div className={styles.productDetails}>
          {Array.from(new Set(itemColors)).slice(0,1).map(color => {

            const formattedColor = color[0].toUpperCase() + color.slice(1)

            return (
              <p className={styles.productColor}>{formattedColor}</p>
            )
          })}

          <p className={styles.productName}>{productName}</p>
          <p className={styles.productPrice}>${itemPrices.listPrice}</p> 
          
          <div className={styles.productColorsContainer}>
            {Array.from(new Set(itemColors)).map(color => {
              return <ColorCircle color={color} size="18px" />
              
              // const styleTest = {
              //   backgroundColor: `${color}`,
              //   border: color === "white" ? `1px solid #d1d5db` : "none"
              // };

              // return (
              //   <p className={styles.productColorCircle} style={styleTest}/>
              // )
            })}
          </div>
          
        </div>
    </div>
  )
}

// each product card is link to details page of item 
import React, { Suspense } from 'react'
import Link from '@/node_modules/next/link'



import StorefrontSectionComponent from '../StorefronSectionComponent/StorefrontSectionComponent';
import ProductCard from '@/app/components/ProductCard/ProductCard';

import styles from "./LatestArrivals.module.css"
import Products from '../../Products/Products';

export default async function LatestArrivals() {

  // const productsReq = await fs.readFile(process.cwd() + '/app/data/products.json', 'utf-8');
  // const products = JSON.parse(productsReq)

  return (
    <StorefrontSectionComponent sectionId="latestArrivals">
      <header className={styles.storefrontHeader}>
        <h3>Latest Arrivals</h3>
        <Link href="shop-all">

          <button className="secondaryBtn">View All</button>

        </Link>
      </header>


        <Suspense fallback={<h1>Loading...</h1>}>
              <Products sliceAmount={8} isLink={true}/>
        </Suspense>
      

    </StorefrontSectionComponent>
  )
}

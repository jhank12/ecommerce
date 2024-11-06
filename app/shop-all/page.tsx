import React from "react";

import Products from "../components/Products/Products";
import ProductsFilter from "./components/ProductsFilter/ProductsFilter";
import { Suspense } from "react";

import styles from "./ShopAll.module.css";

import getAvailableColors from "../lib/getAvailableColors";

export default async function page({ searchParams }: any) {
  const availableColors = await getAvailableColors();

  const sParams = await searchParams;

  return (
    <div className={styles.allProductsPageGrid}>
      <Suspense>
        <ProductsFilter availableColors={availableColors} />
      </Suspense>

      <div className={styles.productListings}>
        <div className={styles.productsGrid}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Products searchParams={sParams} isLink={true} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

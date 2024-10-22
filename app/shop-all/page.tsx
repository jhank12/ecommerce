import React from "react";

import Products from "../components/Products/Products";
import ProductsFilter from "./components/ProductsFilter/ProductsFilter";
import { Suspense } from "react";

import styles from "./ShopAll.module.css";

import getAvailableColors from "../lib/getAvailableColors";

export default async function page({ searchParams }: any) {
  const availableColors = await getAvailableColors();

  return (
    <div className={styles.allProductsPageGrid}>
      <ProductsFilter availableColors={availableColors} />

      <div className={styles.productListings}>
        <div className={styles.productsGrid}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Products searchParams={searchParams} isLink={true} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

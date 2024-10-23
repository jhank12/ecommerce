import React from "react";

import styles from "../ShopAll.module.css";

import ProductsFilter from "./ProductsFilter/ProductsFilter";
import Products from "@/app/components/Products/Products";

import { Suspense } from "react";

import getAvailableColors from "@/app/lib/getAvailableColors";

export default async function ProductsPage() {
  //   let availableColors

  return (
    <div className={styles.allProductsPageGrid}>
      <Suspense>
        <ProductsFilter availableColors={availableColors} />
      </Suspense>

      <div className={styles.productListings}>
        <select name="sortBy" id="sortBy"></select>
        <div className={styles.productsGrid}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Products filters={filters} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

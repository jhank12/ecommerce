import React from "react";
import { promises as fs } from "fs";

import { Suspense } from "react";
import ProductCard from "../ProductCard/ProductCard";

import styles from "./Products.module.css";

import getProducts from "@/app/lib/getProducts";
import getProductData from "@/app/lib/getProductData";

import Link from "@/node_modules/next/link";

export default async function Products({
  //   sliceProducts = false,
  sliceAmount = 0,
  searchParams = null,
  isLink = false,
}) {
  // const productsReq = await fs.readFile(process.cwd() + '/app/data/products.json', 'utf-8');
  // slice for homepage

  const fetchedProducts = await getProducts();

  const products =
    sliceAmount > 0 ? fetchedProducts.slice(0, sliceAmount) : fetchedProducts;

  const filteredProducts = products.filter((product) => {
    if (searchParams) {
      const filtersAmount = Object.keys(searchParams)?.length;

      let filtersCount = 0;

      for (let key in searchParams) {
        if (typeof product[key] === "object") {
          const length = product[key].length;
          product[key].forEach((color) => {
            if (searchParams[key].indexOf(color) > -1) {
              filtersCount++;
            }
          });
        } else {
          if (searchParams[key].indexOf(product[key]) > -1) {
            filtersCount++;
          }
        }
      }

      if (filtersCount >= filtersAmount) return product;
    } else {
      return product;
    }
  });

  return (
    <div className={styles.itemsContainer}>
      {filteredProducts.map((product) => {
        return (
          <Link href={`/shop-all/${product.product_id}`}>
            <ProductCard productId={product.product_id} />
          </Link>
        );
      })}
    </div>
  );
}

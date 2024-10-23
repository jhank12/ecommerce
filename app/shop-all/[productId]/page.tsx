import "remixicon/fonts/remixicon.css";

import React from "react";
import styles from "./page.module.css";
import Link from "@/node_modules/next/link";
import ColorCircle from "@/app/components/ColorCircle/ColorCircle";

import { Suspense } from "react";

import StorefrontSectionComponent from "@/app/components/storefront/StorefronSectionComponent/StorefrontSectionComponent";

import ProductListing from "./components/ProductListing/ProductListing";
import QualitySection from "./components/QualitySection/QualitySection";
import InThisCollection from "./components/InThisCollection/InThisCollection";
import Footer from "@/app/components/storefront/Footer/Footer";

import getProductData from "@/app/lib/getProductData";
import { countReset } from "console";

export default async function ProductPage({ params: { productId } }) {
  const productData = await getProductData(productId);

  return (
    <section className="siteContainer">
      <section className="contentSection">
        <div className="contentContainer">
          <Suspense>
            <ProductListing productData={productData} />
          </Suspense>

          <QualitySection />

          <InThisCollection />

          <Footer />
        </div>
      </section>
    </section>
  );
}

// TODO

import "remixicon/fonts/remixicon.css";

import React from "react";

import { Suspense } from "react";

import ProductListing from "./components/ProductListing/ProductListing";
import QualitySection from "./components/QualitySection/QualitySection";
import InThisCollection from "./components/InThisCollection/InThisCollection";
import Footer from "@/app/components/storefront/Footer/Footer";

import getProductData from "@/app/lib/getProductData";

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

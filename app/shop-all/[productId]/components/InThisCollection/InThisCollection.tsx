import React from "react";
import { Suspense } from "react";
import Products from "@/app/components/Products/Products";
import StorefrontSectionComponent from "@/app/components/storefront/StorefronSectionComponent/StorefrontSectionComponent";
export default function InThisCollection() {
  return (
    <StorefrontSectionComponent>
      <header className="storefrontHeader">
        <h3>In this collection</h3>
      </header>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Products sliceAmount={4} isLink={true} />
      </Suspense>
    </StorefrontSectionComponent>
  );
}

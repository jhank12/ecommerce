"use client";

import "remixicon/fonts/remixicon.css";

import React from "react";
import StorefrontSectionComponent from "@/app/components/storefront/StorefronSectionComponent/StorefrontSectionComponent";

import Link from "@/node_modules/next/link";
import styles from "./page.module.css";
import CheckoutForm from "./components/CheckoutForm";

import CartItems from "../components/CartItems";

import { useSelector } from "@/node_modules/react-redux/dist/react-redux";

export default function Checkout() {
  const { cartItems } = useSelector((state) => state);

  function calculateTotal(): number {
    let sum: number = 0;

    cartItems.forEach((item) => {
      sum += item.quantity * item.price;
    });

    return sum;
  }
  return (
    <StorefrontSectionComponent>
      <div className="contentSection contentContainer">
        <Link className={styles.backToCartLink} href="/cart">
          <p>
            <i className="ri-arrow-left-s-line"></i>
            Back to Shopping Cart
          </p>
        </Link>
        <h2>Checkout</h2>

        <div className={styles.checkoutFormSummary}>
          <CheckoutForm />

          <div className={styles.orderSummary}>
            <h5>Order Summary</h5>

            <div className={styles.orderItems}>
              <CartItems inCart={false} />
            </div>

            <div className={styles.summaryPrices}>
              <div className={styles.priceBreakdown}>
                <div className={styles.priceBreakdownRow}>
                  <p>Subtotal</p>
                  <p>${calculateTotal()}</p>
                </div>

                <div className={styles.priceBreakdownRow}>
                  <p>Shipping</p>
                  <p>FREE</p>
                </div>
              </div>

              <div className={styles.totalPrice}>
                <p>Total</p>
                <p>${calculateTotal()}</p>
              </div>
            </div>

            <button className="btnMain">Confirm Order</button>
          </div>
        </div>
      </div>
    </StorefrontSectionComponent>
  );
}

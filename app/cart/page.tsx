"use client";

import React from "react";
import StorefrontSectionComponent from "../components/storefront/StorefronSectionComponent/StorefrontSectionComponent";
import styles from "./page.module.css";

import IconContainer from "../components/IconContainer/IconContainer";

import CartItems from "./components/CartItems";

import Link from "@/node_modules/next/link";

import { useSelector } from "@/node_modules/react-redux/dist/react-redux";

export default function cart() {
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
        <h2>Shopping Cart</h2>

        {cartItems.length > 0 ? (
          <div className={styles.cartDetails}>
            <CartItems />
            <div className={styles.orderSummary}>
              <h3>Order Summary</h3>
              <div className={styles.itemPricing}>
                <div>
                  <p>Subtotal</p>
                  <p>${calculateTotal()}</p>
                </div>

                <div>
                  <p>Shipping</p>
                  <p>FREE</p>
                </div>
              </div>

              <div className={styles.itemTotal}>
                <p>Total</p>
                <p>${calculateTotal()}</p>
              </div>

              <Link href="/cart/checkout">
                <button className="btnMain">Checkout</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.emptyCartText}>
            <IconContainer icon="ri-shopping-cart-2-line" />
            <p>Your cart is empty</p>
            <p>Let's go explore some products</p>
            <Link href="/shop-all">
              <button className="btnMain">Explore Products</button>
            </Link>
          </div>
        )}
      </div>
    </StorefrontSectionComponent>
  );
}

"use client";

import React, { useState } from "react";

import styles from "../page.module.css";

export default function CheckoutForm() {
  const [selectedDelivery, setSelectedDelivery] = useState();

  const deliveryMethods = [
    {
      type: "Standard",
      duration: "4-5 Business Days",
      price: "FREE",
    },
    {
      type: "Express",
      duration: "2-5 Business Days",
      price: "$15.00",
    },
  ];

  return (
    <form className={styles.checkoutForm} action="">
      <div className={styles.formSection}>
        <h4>Contact Information</h4>
        <div className={styles.labelInputWrap}>
          <label htmlFor="emailInput">Email</label>
          <input type="text" placeholder="user@example.com" id="emailInput" />
        </div>
      </div>

      <div className={styles.formSection}>
        <h4>Shipping Information</h4>

        <div className={styles.labelInputWrap}>
          <label htmlFor="countryInput">Country / Region</label>
          <input type="text" placeholder="United States" id="countryInput" />
        </div>

        <div className={styles.inputsRow}>
          <div className={styles.labelInputWrap}>
            <label htmlFor="firstNameInput">First Name</label>
            <input type="text" placeholder="John" id="firstNameInput" />
          </div>

          <div className={styles.labelInputWrap}>
            <label htmlFor="lastNameInput">Last Name</label>
            <input type="text" placeholder="Appleseed" id="lastNameInput" />
          </div>
        </div>

        <div className={styles.labelInputWrap}>
          <label htmlFor="addressInput">Address</label>
          <input type="text" placeholder="Street Address" id="addressInput" />
        </div>

        <div className={styles.inputsRow}>
          <div className={styles.labelInputWrap}>
            <label htmlFor="cityInput">City</label>
            <input type="text" placeholder="City" id="cityInput" />
          </div>

          <div className={styles.labelInputWrap}>
            <label htmlFor="stateInput">State</label>
            <input type="text" placeholder="State" id="stateInput" />
          </div>

          <div className={styles.labelInputWrap}>
            <label htmlFor="zipInput">Zip</label>
            <input type="text" placeholder="12345" id="zipInput" />
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <h4>Delivery Method</h4>

        <div className={styles.deliveryCards}>
          {deliveryMethods.map((method) => {
            const { type, duration, price } = method;

            return (
              <div
                className={
                  selectedDelivery === type
                    ? styles.deliveryCardActive
                    : styles.deliveryCard
                }
                onClick={() => setSelectedDelivery(type)}
              >
                <div>
                  <p className={styles.deliveryType}>{type}</p>
                  <p className={styles.shippingTime}>{duration}</p>
                </div>

                <p className={styles.deliveryPrice}>{price}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.formSection}>
        <div className={styles.labelInputWrap}>
          <label htmlFor="cardNum">Card Number</label>
          <input type="number" placeholder="1234 1234 1234 1234" id="cardNum" />
        </div>

        <div className={styles.labelInputWrap}>
          <label htmlFor="cardName">Name on card</label>
          <input type="number" placeholder="Full name on card" id="cardName" />
        </div>

        <div className={styles.inputsRow}>
          <div className={styles.labelInputWrap}>
            <label htmlFor="expiration">Expiry</label>
            <input type="text" placeholder="MM/YY" id="expiration" />
          </div>

          <div className={styles.labelInputWrap}>
            <label htmlFor="cvv">CVV</label>
            <input type="number" placeholder="123" id="cvv" />
          </div>
        </div>
      </div>
    </form>
  );
}

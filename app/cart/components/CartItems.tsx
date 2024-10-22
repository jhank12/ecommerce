"use client";

import React from "react";

import styles from "./CartItems.module.css";

import {
  useSelector,
  useDispatch,
} from "@/node_modules/react-redux/dist/react-redux";

import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "@/redux/slices/cartSlice";
import CheckoutOrderItem from "../checkout/components/CheckoutOrderItem/CheckoutOrderItem";

export default function CartItems({ inCart = true }) {
  const { cartItems } = useSelector((state) => state);

  const dispatch = useDispatch();

  function capitalizeFirstLetter(word: string): string {
    if (typeof word === "string") {
      const splitArr = word.split(" ");

      if (splitArr.length > 1) {
        let newWord: string = "";

        for (let i = 0; i < word.split(" ").length; i++) {
          if (i < splitArr.length - 1) {
            newWord += `${
              splitArr[i].slice(0, 1).toUpperCase() + splitArr[i].slice(1)
            } `;
          } else {
            newWord +=
              splitArr[i].slice(0, 1).toUpperCase() + splitArr[i].slice(1);
          }
        }
        return newWord;
      } else {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
      }
    }
  }

  return (
    <div className={styles.cartItems}>
      {cartItems.map((item) => {
        const { productId, name, quantity, color, size, image, price } = item;

        if (inCart) {
          return (
            <div className={styles.cartItem}>
              <img src={image.image_url} alt={image} />

              <div className={styles.itemData}>
                <p className={styles.cartItemName}>{name}</p>

                {size ? (
                  <p className={styles.itemDetails}>
                    {capitalizeFirstLetter(color)} &#183;{" "}
                    {capitalizeFirstLetter(size)}
                  </p>
                ) : (
                  <p>{capitalizeFirstLetter(color)}</p>
                )}

                <p className={styles.itemDesc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur dolore, quod blanditiis nesciunt illo ipsum?
                </p>

                <div className={styles.itemDataBottom}>
                  <div className={styles.itemActions}>
                    <div className={styles.quantityCounter}>
                      <button
                        onClick={() => dispatch(decrementQuantity(productId))}
                      >
                        -
                      </button>
                      {quantity}
                      <button
                        onClick={() => dispatch(incrementQuantity(productId))}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className={styles.removeItemBtn}
                      onClick={() => dispatch(removeFromCart(productId))}
                    >
                      Remove
                    </button>
                  </div>
                  <p>${price}</p>
                </div>
              </div>
            </div>
          );
        } else {
          return <CheckoutOrderItem item={item} />;
        }
      })}
    </div>
  );
}

import React from "react";

import "remixicon/fonts/remixicon.css";

import styles from "./CheckoutOrderItem.module.css";

export default function CheckoutOrderItem({ item }) {
  const { productId, name, quantity, color, size, image, price } = item;

  function capitalizeFirstLetter(word: string): string {
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

  return (
    <div className={styles.orderItem}>
      <img src={image.image_url} alt={image} />

      <div className={styles.itemInfo}>
        <div>
          <p className={styles.itemName}>{name}</p>
          <p className={styles.itemPrice}>${price}</p>
        </div>
        <div>
          {size ? (
            <p>
              {capitalizeFirstLetter(color)} &#183;{" "}
              {capitalizeFirstLetter(size)}
            </p>
          ) : (
            <p>{capitalizeFirstLetter(color)}</p>
          )}
        </div>

        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect } from "react";

import styles from "./ProductListing.module.css";

import {
  useRouter,
  useSearchParams,
  usePathname,
} from "@/node_modules/next/navigation";

import StorefrontSectionComponent from "@/app/components/storefront/StorefronSectionComponent/StorefrontSectionComponent";
import ProductListingColorCircle from "../ProductListingColorCircle/ProductListingColorCircle";

import { useDispatch } from "@/node_modules/react-redux/dist/react-redux";
import { addToCart } from "@/redux/slices/cartSlice";

export default function ProductListing({ productData }) {
  const dispatch = useDispatch();

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const sizeParam = searchParams.get("size");
  const quantityParam = searchParams.get("quantity");
  const colorParam = searchParams.get("color");

  const {
    productId,
    productName,
    productDesc,
    itemColors,
    itemAllStyles,
    productImages,
  } = productData;

  // filter based on color and gets all data
  const itemStyle = itemAllStyles.filter((item) => {
    if (colorParam) {
      return item.color === colorParam;
    } else {
      return item.color === itemColors[0];
    }
  });

  function updateUrl(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    params.set(key, value);

    router.push(`${pathname}?${params}`);
  }

  useEffect(() => {
    setParams();
  }, []);

  function setParams() {
    const params = new URLSearchParams(searchParams.toString());

    params.set("quantity", "1");
    if (itemStyle[0].size) {
      params.set("size", itemStyle[0].size);
    }

    router.push(`${pathname}?${params}`);
  }

  function quantityCount(num: number): number {
    const quantityNum: number = Number(quantityParam);

    if (quantityNum + num < 1) {
      return quantityNum;
    }

    return quantityNum + num;
  }

  const productImg: string = searchParams.get("img");

  function addItemToCart() {
    const cartItemObj = {
      productId: productId,
      name: productName,
      quantity: quantityParam ? Number(quantityParam) : 1,
      price: itemStyle[0].discount
        ? itemStyle[0].sale_price
        : itemStyle[0].list_price,
      color: colorParam ? colorParam : itemColors[0],
      size: sizeParam,

      image: productImages[0],
    };

    dispatch(addToCart(cartItemObj));
  }

  return (
    <StorefrontSectionComponent>
      <div className={styles.productListing}>
        {/* img */}

        <div className={styles.imageContainer}>
          <div className={styles.productMainImage}>
            <img src={productImages[Number(productImg)].image_url} />
          </div>
          <div className={styles.productImages}>
            {productImages.map((img, idx) => {
              return (
                <img
                  src={img.image_url}
                  onClick={() => updateUrl("img", `${idx}`)}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productMainInfo}>
            <h2>{productName}</h2>

            <div className={styles.productPriceContainer}>
              {itemStyle[0].discount ? (
                <>
                  <p className={styles.productPrice}>
                    ${itemStyle[0].sale_price}
                  </p>
                  <p className={styles.productPriceDiscount}>
                    ${itemStyle[0].list_price}
                  </p>
                </>
              ) : (
                <p className={styles.productPrice}>
                  ${itemStyle[0].list_price}
                </p>
              )}
            </div>

            <p className={styles.rating}>
              <p>4.1</p>
              <span className={styles.starIconYellow}>&#9733;</span>
            </p>
          </div>

          <p>{productDesc}</p>

          <div className={styles.productOptionsContainer}>
            <div className={styles.productOption}>
              <p className={styles.productOptionText}>Available Colors</p>

              <div className={styles.colorsContainer}>
                {itemColors.map((color) => {
                  return (
                    <ProductListingColorCircle
                      color={color}
                      updateUrl={() => updateUrl("color", color)}
                      colorActive={colorParam === color}
                    />
                  );
                })}
              </div>
            </div>

            {itemStyle[0].size && (
              <div className={styles.productOption}>
                <p className={styles.productOptionText}>Available Sizes</p>

                <div className={styles.sizeBtnsContainer}>
                  {itemStyle.map((style) => {
                    const { size } = style;

                    return (
                      <button
                        className={
                          sizeParam === `${size}`
                            ? styles.sizeBtnActive
                            : styles.sizeBtn
                        }
                        onClick={() => updateUrl("size", `${size}`)}
                      >
                        {typeof size === "string" ? size.toUpperCase() : size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className={styles.productOption}>
              <p className={styles.productOptionText}>Quantity</p>

              <div className={styles.quantityCounter}>
                <button
                  onClick={() => updateUrl("quantity", quantityCount(-1))}
                  disabled={Number(quantityParam) === 1}
                >
                  -
                </button>
                {quantityParam}
                <button onClick={() => updateUrl("quantity", quantityCount(1))}>
                  +
                </button>
              </div>
            </div>
          </div>

          <button className="btnMain" onClick={() => addItemToCart()}>
            Add to Cart
          </button>

          <div className={styles.productDropdowns}>
            <div className={styles.productDropdown}>
              <div className={styles.productDropdownTop}>
                <p>Features</p>
                <i className="ri-add-line" />
              </div>

              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>

            <div className={styles.productDropdown}>
              <div className={styles.productDropdownTop}>
                <p>Fabric & Care</p>
                <i className="ri-add-line" />
              </div>

              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>

            <div className={styles.productDropdown}>
              <div className={styles.productDropdownTop}>
                <p>Shipping</p>
                <i className="ri-add-line" />
              </div>

              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StorefrontSectionComponent>
  );
}

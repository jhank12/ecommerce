"use client";

import React from "react";
import styles from "./NavBar.module.css";

import Link from "@/node_modules/next/link";

import { useSelector } from "@/node_modules/react-redux/dist/react-redux";

export default function NavBar() {
  const { cartItems } = useSelector((state) => state);

  return (
    <header className="mainHeader">
      <nav>
        <h4>
          <Link href="/">StyleNest</Link>
        </h4>

        <ul>
          <li>
            <Link href="/shop-all">Shop all</Link>
          </li>
          <li>
            <Link href="#latestArrivals" scroll={true}>
              Latest arrivals
            </Link>
          </li>
        </ul>
      </nav>

      <Link href="/cart">
        <i className="ri-shopping-bag-3-line"></i>
      </Link>
    </header>
  );
}

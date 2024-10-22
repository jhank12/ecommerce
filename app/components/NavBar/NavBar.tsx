"use client";

import React from "react";

import Link from "@/node_modules/next/link";

export default function NavBar() {
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
            <Link href="/#latestArrivals" scroll={true}>
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

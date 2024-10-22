"use client";

import "remixicon/fonts/remixicon.css";

import React, { useCallback } from "react";

import styles from "./ProductsFilter.module.css";

import {
  useRouter,
  useSearchParams,
  usePathname,
} from "@/node_modules/next/navigation";

// dropdowns
import CollectionsDropdown from "../CollectionsDropdown/CollectionsDropdown";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import ColorsDropdown from "../ColorsDropdown/ColorsDropdown";

export default function ProductsFilter({ availableColors }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateUrl = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const prevParams = params.getAll(name);
      const newValue: string = value.split(" ")[0].toLowerCase();

      const keyParams = params.get(name);

      if (!isChecked(name, value)) {
        if (prevParams.length > 0) {
          params.set(name.toLowerCase(), prevParams + " " + newValue);
        } else {
          params.set(name.toLowerCase(), newValue);
        }

        router.push(pathname + "?" + params.toString());
      } else {
        const paramsArr = keyParams?.split(" ");

        const filteredParams = paramsArr?.filter((param) => {
          return param !== newValue;
        });

        // if only one filter is selected
        if (paramsArr?.length === 1) {
          params.delete(name);
          router.push(pathname + "?" + params.toString());

          return;
        }

        params.delete(name);

        let paramString: string = "";

        filteredParams?.forEach((param, idx) => {
          paramString +=
            idx !== filteredParams.length - 1 ? param + " " : param;
        });

        params.set(name.toLowerCase(), paramString);

        router.push(pathname + "?" + params.toString());
      }
    },
    [searchParams]
  );

  function isChecked(filterKey: string, filterValue: string): boolean {
    const keyParams = new URLSearchParams(searchParams.toString()).get(
      filterKey.toLowerCase()
    );
    const newValue: string = filterValue.split(" ")[0].toLowerCase();

    const paramsArr = keyParams?.split(" ");

    if (paramsArr) {
      if (paramsArr.indexOf(newValue) !== -1) {
        return true;
      } else {
        return false;
      }
    }
  }

  function clearFilters() {
    router.push(`${pathname}`);
  }

  return (
    <section className={styles.productsFilter}>
      <CollectionsDropdown isChecked={isChecked} updateUrl={updateUrl} />

      <CategoryDropdown isChecked={isChecked} updateUrl={updateUrl} />

      <ColorsDropdown
        colors={availableColors}
        isChecked={isChecked}
        updateUrl={updateUrl}
      />

      <button className={styles.clearFiltersBtn} onClick={clearFilters}>
        Clear Filters
      </button>
    </section>
  );
}

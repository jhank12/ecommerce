import React from "react";
import FilterDropdown from "../FilterDropdown/FilterDropdown";

export default function CategoryDropdown({ isChecked, updateUrl }) {
  const categoryArr = ["Unisex", "Women", "Men"];

  return (
    <FilterDropdown
      dropdownName="Category"
      dropdownOptions={categoryArr}
      filterKey="category"
      isChecked={isChecked}
      updateUrl={updateUrl}
    />
  );
}

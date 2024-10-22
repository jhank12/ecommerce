import React from "react";
import FilterDropdown from "../FilterDropdown/FilterDropdown";

export default function CollectionsDropdown({ isChecked, updateUrl }) {
  const collectionsArr = [
    // "Latest arrivals",
    "Urban oasis",
    "Cozy Comfort",
    "Fresh Fusion",
  ];

  return (
    <FilterDropdown
      dropdownName="Collections"
      dropdownOptions={collectionsArr}
      filterKey="collection"
      isChecked={isChecked}
      updateUrl={updateUrl}
    />
  );
}

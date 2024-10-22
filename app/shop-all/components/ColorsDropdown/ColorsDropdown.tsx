import React from "react";
import FilterDropdown from "../FilterDropdown/FilterDropdown";

import getAvailableColors from "@/app/lib/getAvailableColors";

export default function ColorsDropdown({ colors, isChecked, updateUrl }) {
  // const colors = await getAvailableColors();
  // const availableColors = await getAvailableColors()

  return (
    <FilterDropdown
      dropdownName="Colors"
      dropdownOptions={colors}
      filterKey="color"
      isChecked={isChecked}
      updateUrl={updateUrl}
    />
  );
}

"use client";
import React, { useState } from "react";

import styles from "./FilterDropdown.module.css";

import ColorCircle from "@/app/components/ColorCircle/ColorCircle";

export default function FilterDropdown({
  dropdownName,
  dropdownOptions,
  filterKey,
  isChecked,
  updateUrl,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className={styles.filterDropdown}>
      <div
        className={styles.filterDropdownHeader}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <h4>{dropdownName}</h4>
        {dropdownOpen ? (
          <i className="ri-subtract-line" />
        ) : (
          <i className="ri-add-line" />
        )}
      </div>

      {dropdownOpen && (
        <div
          className={
            dropdownName === "Colors"
              ? styles.colorOptionsContainer
              : styles.dropdownOptions
          }
        >
          {dropdownOptions.map((option, optionIdx) => {
            let colId;

            if (typeof option === "string") {
              colId = option.toLocaleLowerCase().replace(" ", "-");
            }

            if (dropdownName === "Colors") {
              return (
                <div className={styles.colorOptionsContainer}>
                  <ColorCircle
                    color={option}
                    updateUrl={() => updateUrl(filterKey, option)}
                    size={"20px"}
                    circleActive={isChecked(filterKey, option)}
                  />
                </div>
              );
            } else {
              return (
                <label
                  htmlFor={colId}
                  className={styles.dropdownCheckboxContainer}
                >
                  <input
                    id={colId}
                    type="checkbox"
                    onClick={() => updateUrl(filterKey, option)}
                    checked={isChecked(filterKey, option)}
                  />
                  <p>{option}</p>
                </label>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

import React from "react";
import styles from "./FilterDropdown.module.css"

export default function FilterDropdownHeader({dropdownName, dropdownOpen, setDropdownOpen) {
  return (
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
  );
}

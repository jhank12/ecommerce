import React from "react";

export default function FilterDropdownOptions() {
  return (
    <div className={styles.dropdownOptions}>
      {dropdownOptions.map((option) => {
        const colId = option.toLocaleLowerCase().replace(" ", "-");

        if (dropdownName === "Colors") {
          return (
            // <div className={styles.colorOptionsContainer}>
            <ColorCircle
              color={option}
              addToFilters={() =>
                addToFilters(option, currentChecked, filterSetter, filterKey)
              }
              circleLg={true}
            />
            // </div>
          );
        } else if (dropdownName === "Rating") {
        } else {
          return (
            <label htmlFor={colId} className={styles.dropdownCheckboxContainer}>
              <input
                id={colId}
                type="checkbox"
                onClick={() =>
                  addToFilters(option, currentChecked, filterSetter, filterKey)
                }
                checked={isChecked(option, currentChecked)}
              />
              <p>{option}</p>
            </label>
          );
        }
      })}
    </div>
  );
}

// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container
// put together filter dropdown header and options in the collections, colors, category filter component
// wrap the dropdown options in there with the star rating or the color circle container

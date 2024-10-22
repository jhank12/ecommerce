import React from "react";

import styles from "./ColorCircle.module.css";

export default function ColorCircle({
  color,
  updateUrl,
  size = "15px",
  circleActive = false,
}) {
  const styleTest = {
    backgroundColor: `${color}`,
    border: color === "white" ? `1px solid #d1d5db` : "none",
    borderRadius: "50%",
    height: size,
    width: size,
  };

  return (
    <div
      className={circleActive ? styles.circleActive : styles.productColorCircle}
      style={styleTest}
      onClick={updateUrl}
    />
  );
}

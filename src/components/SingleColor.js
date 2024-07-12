import React, { useEffect, useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`${index > 10 && "light-color"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={handleClick}
    >
      <p className="per-value">{weight}%</p>
      <p className="hex-value">{hex}</p>
      {alert && <p className="copy-text">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;

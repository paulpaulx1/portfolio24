import { nanoid } from "nanoid";
import React from "react";
import { Link } from "react-router-dom";
import { artArray, imageMap } from "../constants/img_map";
import { LazyLoadedImage } from "./LazyLoadedImage";

const Art = () => (
  <div className="artgrid">
    {artArray.map((title, i) => (
      <LazyLoadedImage
        className={"art__img" + ` slide__${i % 2 === 0 ? "left" : "right"}`}
        src={title}
        alt={`Artwork ${i + 1}`}
      />
    ))}
  </div>
);

export default Art;

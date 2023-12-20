import { nanoid } from "nanoid";
import React from "react";
import { Link } from "react-router-dom";
import { artArray, imageMap } from "../constants/img_map";
import { LazyLoadedImage } from "./LazyLoadedImage";
import { art_titles } from '../constants/art_titles'

const Art = () => (
  <div className="artgrid">
    {artArray.map((title, i) => (
      <LazyLoadedImage
        slideDir={`slide__${i % 2 === 0 ? "left" : "right"}`}
        src={title}
        alt={`Artwork ${i + 1}`}
        title={art_titles[i]}
      />
    ))}
  </div>
);

export default Art;

import { nanoid } from "nanoid";
import React from "react";
import { artArray } from "../constants/img_map";
import { LazyLoadedImage } from "./LazyLoadedImage";
import { art_titles } from '../constants/art_titles'

const Art = () => {

return (
    <div className="artgrid">
    {artArray.map((title, i) => (
      <LazyLoadedImage
        slideDir={`slide__${i % 2 === 0 ? "left" : "right"}`}
        src={title}
        alt={`Artwork ${i + 1}`}
        title={art_titles[i]}
        key={nanoid()}
      />
    ))}
  </div>
);
    }
export default Art;

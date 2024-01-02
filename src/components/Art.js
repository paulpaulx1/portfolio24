import React from "react";
import { nanoid } from "nanoid";
import { LazyLoadedImage } from "./LazyLoadedImage";
import { artData } from "../constants/art_titles"; // Updated import

const Art = () => {
  return (
    <div className="artgrid">
      {artData.map((art, i) => (
        <LazyLoadedImage
          src={art.src} // Assuming artData includes a 'src' key
          alt={`Artwork ${i + 1}`}
          title={art.title}
          dimensions={art.dimensions}
          material={art.material}
          key={nanoid()}
        />
      ))}
    </div>
  );
};

export default Art;
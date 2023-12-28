import React, { useState } from "react";
import Modal from "react-modal";
import { nanoid } from "nanoid";
import Loading from "./Loading";
import { ArtworkLabel } from "./ArtworkLabel";
import "./art.css"; // Import your stylesheet

export const LazyLoadedImage = ({
  src,
  alt,
  title,
  dimensions,
  material,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const handleImageLoad = () => {
    setLoaded(true);
  };

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div
        className={`${loaded ? "loaded" : ""}`}
        onClick={openModal}
        key={nanoid()}
      >
        <img
          src={src}
          alt={alt}
          className={`artgriditem fade-in ${loaded ? "visible" : ""}`}
          onLoad={handleImageLoad}
          loading="lazy"
        />
        {!loaded && <Loading className="artgriditem fade-in" />}
        {loaded && (
          <ArtworkLabel
            title={title}
            dimensions={dimensions}
            material={material}
            inModal={modalIsOpen}
          />
        )}
      </div>
      {modalIsOpen && (
        <>
          <button onClick={closeModal} className="close-button">
            Close
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Artwork Modal"
            className="modal-content"
            overlayClassName="modal-overlay"
          >
            {loaded ? (
              <>
                <img src={src} alt={alt} className="modal-img" />
                <ArtworkLabel title={title} inModal={modalIsOpen} />
              </>
            ) : (
              <Loading />
            )}
          </Modal>
        </>
      )}
    </>
  );
};

import React, { useState } from "react";
import Modal from "react-modal";
import Loading from "./Loading";
import { ArtworkLabel } from "./ArtworkLabel";
import "./art.css"; // Import your stylesheet

export const LazyLoadedImage = ({ src, alt, title, dimensions, material }) => {
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
      <div className={`card ${loaded ? "loaded" : ""}`} onClick={openModal}>
        <img
          src={src}
          alt={alt}
          className={`artgriditem fade-in ${loaded ? "visible" : ""}`}
          onLoad={handleImageLoad}
          loading="lazy"
        />
        {!loaded && <Loading />}
        {loaded && (
          <div className="card-info">
            <ArtworkLabel
              title={title}
              dimensions={dimensions}
              material={material}
            />
          </div>
        )}
      </div>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Artwork Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <button onClick={closeModal} className="close-button">Close</button>
          {loaded ? (
            <>
              <img src={src} alt={alt} className="modal-img" />
              <div className="modal-info">
                <ArtworkLabel
                  title={title}
                  dimensions={dimensions}
                  material={material}
                  inModal={modalIsOpen}
                />
              </div>
            </>
          ) : (
            <Loading />
          )}
        </Modal>
      )}
    </>
  );
};
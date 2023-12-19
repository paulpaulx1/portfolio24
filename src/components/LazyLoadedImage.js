import React, { useState } from "react";
import Modal from "react-modal";
import { nanoid } from "nanoid";
import "./art.css"; // Import your stylesheet

export const LazyLoadedImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = '';
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
        />
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
            <img src={src} alt={alt} className="modal-img" />
          </Modal>
        </>
      )}
    </>
  );
};

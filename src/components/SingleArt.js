import React, { useState } from 'react';
import { artArray } from '../constants/img_map';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const SingleArt = () => {
  const urlMatch = window.location.href.match(/\d+$/);
  const index = urlMatch ? parseInt(urlMatch[0], 10) : null;

  const imagePath = index !== null ? artArray[index - 1] : '';

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('open modal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="singleartwrapper">

        <img
          className="singleartimg"
          src={imagePath}
          alt={`Artwork ${index}`}
          onClick={openModal}
        />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={`Artwork ${index} Modal`}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
          <img
            className="modal-img"
            src={imagePath}
            alt={`Artwork ${index}`}
          />
        </div>
      </Modal>
    </div>
  );
};

export default SingleArt;
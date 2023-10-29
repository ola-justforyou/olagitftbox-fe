import React, { useRef, useState } from 'react';
// import '../ModalCard/style.css';
import Modal from 'react-animated-modal';

const ModalCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Modal
        visible={showModal}
        closemodal={() => setShowModal(false)}
        type='flipInX'
      >
        Some text or JSX inside modal goes here...
      </Modal>
      <div onClick={() => setShowModal(true)}>Open Modal</div>
    </div>
  );
};

export default ModalCard;

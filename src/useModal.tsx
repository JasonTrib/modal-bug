import React, { FC, useState } from 'react';
import Modal from './Modal';

type ModalComponentProps = {
  children: React.ReactNode;
};

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ModalComponent: FC<ModalComponentProps> = ({ children }) => (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      {children}
    </Modal>
  );

  return {
    Modal: ModalComponent,
    openModal,
    closeModal,
  };
};

export default useModal;

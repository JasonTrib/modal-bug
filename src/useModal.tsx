import React, { FC, useCallback, useState } from 'react';
import Modal from './Modal';

type ModalComponentProps = {
  children: React.ReactNode;
};

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const ModalComponent: FC<ModalComponentProps> = useCallback(
    ({ children }) => (
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {children}
      </Modal>
    ),
    [isModalOpen, closeModal],
  );

  return {
    Modal: ModalComponent,
    isModalOpen,
    openModal,
    closeModal,
  };
};

export default useModal;

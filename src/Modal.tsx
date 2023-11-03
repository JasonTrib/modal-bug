import { FC, useEffect, useState } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: FC<ModalProps> = ({ isOpen, children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Modal mounted');
    return () => {
      console.log('%cModal unmounted', 'color: #F88');
    };
  }, []);

  if (!isOpen) return null;
  return (
    <div className="modal">
      {children}
      <button onClick={() => setCount((p) => p + 1)}>Count: {count}</button>
    </div>
  );
};

export default Modal;

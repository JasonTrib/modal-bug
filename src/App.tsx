import { useState } from 'react';
import useModal from './useModal';

function App() {
  const [count, setCount] = useState(0);
  const { Modal, openModal, closeModal } = useModal();

  return (
    <div className="app">
      <button
        onClick={() => {
          setCount((p) => p + 1);
          console.log('--count clicked--');
        }}
      >
        Count: {count}
      </button>
      <button onClick={openModal}>Open Modal</button>
      <Modal>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
      <button onClick={closeModal}>Close Modal</button>
    </div>
  );
}

export default App;

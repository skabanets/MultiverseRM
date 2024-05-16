import { useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

interface ModalProps {
  children: React.ReactNode;
  toggleModal: () => void;
}

export const Modal = ({ children, toggleModal }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [toggleModal]);

  const handleClickOnBackdrop = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    <div
      className="flex items-center justify-center fixed bg-black backdrop-blur-sm bg-opacity-40 w-screen h-screen left-0 top-0 z-50"
      onClick={handleClickOnBackdrop}
    >
      <div className="relative rounded-lg p-10 bg-teal-400">
        <button type="button" onClick={toggleModal} className="absolute top-1 right-2 w-3 h-3">
          <IoCloseOutline className="stroke-base-200" />
        </button>
        {children}
      </div>
    </div>
  );
};
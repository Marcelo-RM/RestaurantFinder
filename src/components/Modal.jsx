import React, { useEffect } from 'react';
import Portal from "./Portal";
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background-color: rgba(78, 89, 131, 0.5);
  backdrop-filter: blur(5px);

  z-index: 999;
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% - 10vh);
  width: 500px;
  padding: 24px;
  background-color: #fff;
  border-radius: 6px;
`;

const Modal = function ({ children, open, onClose }) {

  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode === 27) onClose();
    };

    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    }
  }, [onClose]);


  if (!open) return null;

  function onOverlayClick() {
    onClose();
  };

  function onDialogClick(e) {
    e.stopPropagation();
  };

  return ([
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>
          {children}
        </Dialog>
      </Overlay>
    </Portal>
  ]);
};

export default Modal;
import React from 'react';
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
`;

const Modal = function (props) {
  return ([
    <Portal>
      <Overlay>
        <Dialog>
          {props.children}
        </Dialog>
      </Overlay>
    </Portal>
  ]);
};

export default Modal;
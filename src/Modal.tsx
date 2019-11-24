import React from 'react';
import { createPortal } from 'react-dom';
import scrollLocker from 'body-scroll-lock';

import { DialogContext } from './context';
import { TContext } from './types';

type TProps = {
  isOpen: boolean;
  targetScrollSelector: string;
};

const Modal: React.FC<TProps> = ({ targetScrollSelector, isOpen, children }) => {
  const { node } = React.useContext<TContext>(DialogContext);
  const { current: modalWrapper } = React.useRef(document.createElement('div'));

  React.useEffect(() => {
    if (typeof node !== 'string') node.appendChild(modalWrapper);

    const target = modalWrapper.querySelector(targetScrollSelector) as Element;
    scrollLocker.disableBodyScroll(target);

    return (): void => {
      if (typeof node !== 'string') node.removeChild(modalWrapper);
      scrollLocker.enableBodyScroll(target);
    };
  }, []);

  return isOpen ? createPortal(children, modalWrapper) : null;
};

export { Modal };

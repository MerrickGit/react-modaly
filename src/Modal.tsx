import * as React from 'react';
import { createPortal } from 'react-dom';

import { DialogContext } from './context';
import { TContext } from './types';

type TProps = {
  /** Flag for displaying a modal window  */
  isOpen: boolean;
  /** If you need to change 'div' modal wrapper to another  */
  as?: string;
};

const Modal: React.FC<TProps> = ({ isOpen, children, as = 'div' }) => {
  const { node } = React.useContext<TContext>(DialogContext);
  const { current: modalWrapper } = React.useRef(document.createElement(as));

  React.useEffect(() => {
    if (typeof node !== 'string') node.appendChild(modalWrapper);

    return (): void => {
      if (typeof node !== 'string') node.removeChild(modalWrapper);
    };
  }, []);

  return isOpen ? createPortal(children, modalWrapper) : null;
};

export { Modal };

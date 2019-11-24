import React, { useMemo } from 'react';

/**
 * useDialog is hook which can be used to open/close modal window.
 *
 * @example
 * import { useState } from 'react';
 * import { useDialog, Modal } from 'react-modaly';
 * const Button = () => {
 *  const [disabled, setDisabled] = useState(false);
 *  const { isOpen, open, close } = useDialog();
 *
 *  return (
 *    <React.Fragment>
 *      <button onClick={open} disabled={disabled}>Choose something into modal</button>
 *      <Modal isOpen={isOpen}>Modal window</Modal>
 *    </React.Fragment>
 *  );
 * };
 */

type TDialog = (defaultState?: boolean) => { isOpened: boolean; open: () => void; close: () => void };

export const useDialog: TDialog = defaultState => {
  const [isOpened, setOpen] = React.useState<boolean>(defaultState || false);

  const open = React.useCallback(() => setOpen(true), []);
  const close = React.useCallback(() => setOpen(false), []);

  return useMemo(() => ({ isOpened, open, close }), [isOpened]);
};

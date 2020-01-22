import * as React from 'react';

type TDialog = (
  defaultState?: boolean,
) => {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useDialog: TDialog = defaultState => {
  const [isOpen, setOpen] = React.useState<boolean>(defaultState || false);

  const open = React.useCallback(() => setOpen(true), []);
  const close = React.useCallback(() => setOpen(false), []);

  return React.useMemo(() => ({ isOpen, open, close }), [isOpen]);
};

import React from 'react';

import { Dialog } from '@blueprintjs/core';

export default ({ close, children }) => (
  <Dialog icon="info-sign" onClose={close} title="" usePortal={false} isOpen>
    {children}
  </Dialog>
);

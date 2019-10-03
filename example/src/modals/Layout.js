import React from 'react';

import { Dialog } from "@blueprintjs/core";

export default ({ close, component: Component, success, cancel, instanceName }) => {
  return (
    <Dialog
      icon="info-sign"
      onClose={close}
      title=""
      className={instanceName}
      isOpen
    >
      <Component success={success} cancel={cancel} />
    </Dialog>
  )
};

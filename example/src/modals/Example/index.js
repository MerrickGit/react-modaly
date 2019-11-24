import React from 'react';
import { Button, Classes } from '@blueprintjs/core';
import ModalLayout from '../Layout';

export default ({ success, cancel, close }) => {
  const fill = () => success({ framework: 'react', modalLibrary: 'react-modaly' });

  return (
    <ModalLayout close={close}>
      <div className={Classes.DIALOG_BODY}>
        <p>Fill form with predefined data?</p>
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button intent="danger" onClick={cancel}>
            Close
          </Button>
          <Button intent="primary" onClick={fill}>
            Fill form
          </Button>
        </div>
      </div>
    </ModalLayout>
  );
};

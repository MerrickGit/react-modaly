import React from 'react';
import { Button, Classes } from "@blueprintjs/core";

export default ({ success, cancel }) => {
  const fill = () => success({ framework: 'react', modalLibrary: 'react-modaly' });

  return (
    <React.Fragment>
      <div className={Classes.DIALOG_BODY}>
        <p>Fill form with predefined data?</p>
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button intent="danger" onClick={cancel}>Close</Button>
          <Button intent="primary" onClick={fill}>Fill form</Button>
        </div>
      </div>
    </React.Fragment>
  )
}

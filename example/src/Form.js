import React, { useState } from 'react';
import { useDialog, Modal } from 'react-modaly';
import { Button, InputGroup } from '@blueprintjs/core';
import Example from './modals/Example';

const Form = () => {
  const [framework, setFramework] = useState('');
  const [library, setLibrary] = useState('');
  const [isSad, setSad] = useState(false);
  const { isOpen, open, close } = useDialog();

  const handleSuccess = ({ framework, modalLibrary }) => {
    setFramework(framework);
    setLibrary(modalLibrary);
    close();
  };

  const handleCancel = () => {
    setSad(true);
    setFramework('');
    setLibrary('');
    close();
  };

  const handleClose = () => {
    setSad(true);
    close();
  };

  return (
    <React.Fragment>
      <div style={{ width: '400px' }}>
        <InputGroup
          placeholder="what the best framework"
          value={framework}
          onChange={e => setFramework(e.target.value)}
        />
        <InputGroup
          placeholder="what the best library for modal"
          value={library}
          onChange={e => setLibrary(e.target.value)}
        />
        <Button text="Open example modal" onClick={open} />
        {isSad ? <p>Creator is so sad</p> : null}
      </div>
      <Modal isOpen={isOpen} as="section">
        <Example close={handleClose} success={handleSuccess} cancel={handleCancel} />
      </Modal>
    </React.Fragment>
  );
};

export default Form;

import React, { useState } from 'react';
import { useDialog, actions } from 'react-modaly';
import { Button, InputGroup } from '@blueprintjs/core';
import { exampleInstanceName } from './modals/config';

const Form = () => {
  const [framework, setFramework] = useState('');
  const [library, setLibrary] = useState('');
  const [isSad, setSad] = useState(false);
  const { open } = useDialog();

  const onClick = () => {
    open({
      instanceName: exampleInstanceName,
      params: { buttonText: 'button_text' },
    }).then(({ action, values: { framework, modalLibrary } = {} }) => {
      if (action === actions.success) {
        setFramework(framework);
        setLibrary(modalLibrary);
      } else if (action === actions.cancel) {
        setSad(true);
        setFramework('');
        setLibrary('');
      } else if (action === actions.close) {
        setSad(true);
      }
    });

    return null;
  };

  return (
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
      <Button text="Open example modal" onClick={onClick} />
      {isSad ? <p>Creator is so sad</p> : null}
    </div>
  );
};

export default Form;

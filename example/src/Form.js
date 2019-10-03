import React, { useState } from 'react';
import { useDialog, statuses } from 'react-modaly';
import { Button, InputGroup } from "@blueprintjs/core";
import { exampleInstanceName } from './modals/config';

export default () => {
  const [framework, setFramework] = useState('');
  const [library, setLibrary] = useState('');
  const [isSad, setSad] = useState(false);
  const { open } = useDialog();

  const onClick = () => {
    open({
      instanceName: exampleInstanceName,
      params: { buttonText: 'button_text' }
    }).then(({ action, values: { framework, modalLibrary } = {} }) => {
      if (action === statuses.success) {
        setFramework(framework);
        setLibrary(modalLibrary);
      } else if (action === statuses.cancel) {
        setSad(true);
        setFramework('');
        setLibrary('');
      } else if (action === statuses.close) {
        setSad(true);
      }
    });
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

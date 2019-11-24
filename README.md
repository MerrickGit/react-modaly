# react-modaly

> Promise based controller for modal window.

[![NPM](https://img.shields.io/npm/v/react-modaly.svg)](https://www.npmjs.com/package/react-modaly)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Licence](https://img.shields.io/npm/l/react-modaly)
[![Build Status](https://travis-ci.org/MerrickGit/react-modaly.svg?branch=master)](https://travis-ci.org/MerrickGit/react-modaly)

## Install

```bash
npm install --save react-modaly
```

## Usage

##### Step 1 - add modal Provider in project

Provider create modal context for `useDialog`.

```js
import { Provider as ModalProvider } from 'react-modaly';
import { config } from './modalConfig';
import Layout from './Layout';

const MODAL_NODE = document.getElementById('modal');

const App = () => (
  <ModalProvider node={MODAL_NODE}>
    <div>
      <h1>Example app</h1>
      <Form />
    </div>
  </ModalProvider>
);
```

##### Step 2 - create modal component

Example modal window

```js
// ./Example.js
import React from 'react';
import { Button, Classes, Dialog } from '@blueprintjs/core';

export default ({ success, cancel, close }) => {
  const fill = () => success({ framework: 'react' });

  return (
    <Dialog icon="info-sign" onClose={close} title="" isOpen>
      <div className={Classes.DIALOG_BODY}>
        <p>Fill form with predefined data?</p>
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button intent="danger" onClick={cancel}>
            Clear field
          </Button>
          <Button intent="primary" onClick={fill}>
            Fill form
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
```

##### Step 3 - now you can open modal

```js
import React, { useState, useCallback } from 'react';
import { useDialog, Modal } from 'react-modaly';
import { Button, InputGroup } from '@blueprintjs/core';

import ExampleModal from './ExampleModal';

const Form = () => {
  const [framework, setFramework] = useState('');
  const { isOpened, open, close } = useDialog();

  const handleClose = useCallback(() => {
    setFramework('');
    close();
  }, []);

  const handleSuccess = useCallback(({ framework }) => {
    setFramework(framework);
    close();
  }, []);

  return (
    <>
      <InputGroup
        placeholder="what the best framework"
        value={framework}
        onChange={e => setFramework(e.target.value)}
      />
      <Button text="Open example modal" onClick={open} />
      <Modal isOpen={isOpened}>
        <ExampleModal close={close} cancel={handleClose} succes={handleSuccess} />
      </Modal>
    </>
  );
};

export default Form;
```

---

### Example app

[Example app](https://merrickgit.github.io/react-modaly/) and [code of example app](https://github.com/MerrickGit/react-modaly/tree/master/example)

#### Use typescript

The `React-modaly` source code is written in TypeScript,
so you can rest easy that `React-modaly`'s types will always be up-to-date.

## License

MIT © [MerrickGit](https://github.com/MerrickGit)

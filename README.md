<div align="left">
  <h1 align="center">REACT-MODALY</h1>

- Trusted by best UI frameworks<br/>
- Matching all your cases<br/>
- Developer friendly API
  <br/>

[![NPM](https://img.shields.io/npm/v/react-modaly.svg)](https://www.npmjs.com/package/react-modaly)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/MerrickGit/react-modaly.svg?branch=master)](https://travis-ci.org/MerrickGit/react-modaly)
[![bundle size](https://badgen.net/bundlephobia/minzip/react-modaly)](https://bundlephobia.com/result?p=react-modaly)
[![downloads](https://badgen.net/npm/dm/react-modaly)](https://www.npmtrends.com/react-modaly)
![Licence](https://img.shields.io/npm/l/react-modaly)

  <hr/>
</div>

Component to render your modal into Portals.

# Features

- Works through **Portals**.
- No UI. You can use any UI or create your own.
- Written on typescript.
- React **hooks** support.
- Very simple API.
- Dependecies free.
- 1kb size!!!

## Install

```bash
npm install --save react-modaly
```

## Usage

### Step 1 - add modal Provider in project

Provider create modal context.

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

### Step 2 - create modal component

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

### Step 3 - Now you can use modal

```js
import React, { useState, useCallback } from 'react';
import { useDialog, Modal } from 'react-modaly';
import { Button, InputGroup } from '@blueprintjs/core';

import ExampleModal from './ExampleModal';

const Form = () => {
  const [framework, setFramework] = useState('');
  const { isOpen, open, close } = useDialog();

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
      <Modal isOpen={isOpen} as="section">
        <ExampleModal close={close} cancel={handleClose} success={handleSuccess} />
      </Modal>
    </>
  );
};

export default Form;
```

---

#### Custom DOM element

You can pass prop `as` in `Modal` component if you need to change internal `div` element to any other.

```javascript
  <Modal isOpen={isOpen} as="section">
```

#### Multiply modals

You can render modal into another modal because, `Modal` component create wrapper into portal.

#### Use typescript

The `react-modaly` source code is written in TypeScript,
so you can rest easy that `react-modaly`'s types will always be up-to-date.

#### Tips

- If you need to lock scroll use [react-scrolllock](https://www.npmjs.com/package/react-scrolllock)
- If you need to focus lock inside your modal use [react-focus-lock](https://www.npmjs.com/package/react-focus-lock)

#### Example app

[Example app](https://merrickgit.github.io/react-modaly/) and [code of example app](https://github.com/MerrickGit/react-modaly/tree/master/example)

#### License

MIT © [MerrickGit](https://github.com/MerrickGit)

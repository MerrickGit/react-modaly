# react-modaly

> Promise based controller for modal window.5

[![NPM](https://img.shields.io/npm/v/react-modaly.svg)](https://www.npmjs.com/package/react-modaly)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Licence](https://img.shields.io/npm/l/react-modaly)
[![Build Status](https://travis-ci.org/MerrickGit/react-modaly.svg?branch=master)](https://travis-ci.org/MerrickGit/react-modaly)
## Install

```bash
npm install --save react-modaly
```

## Usage

##### Step 1 - create modal Layout component

Layout component is base component for all modal windows.

```js
// ./Layout.js
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
      <React.Suspense fallback={'loading'}>
        <Component success={success} cancel={cancel} />
      </React.Suspense>
    </Dialog>
  )
};
```

##### Step 2 - create modal
Example modal window

```js
// ./Example.js
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
```

##### Step 3 - create modal config

Config is collection which contain all modal window for your project.

```js
// ./modalConfig.js
export const exampleInstanceName = 'account/requisites';

export const config = {
  [exampleInstanceName]: React.lazy(() => import('./Example'))
};
```

##### Step 3 - add modal Provider in project

Provider create modal context for `useDialog`.

```js
import { Provider as ModalProvider } from 'react-modaly';
import { config } from './modalConfig';
import Layout from './Layout';

const MODAL_NODE = document.getElementById('modal');

const App = () => (
  <ModalProvider config={config} Layout={Layout} node={MODAL_NODE}>
    <div>
      <h1>Example app</h1>
      <Form />
    </div>
  </ModalProvider>
);

```

##### Step 4 - now you can open modal

```js
import React, { useState } from 'react';
import { useDialog, actions } from 'react-modaly';
import { Button, InputGroup } from '@blueprintjs/core';
import { exampleInstanceName } from './modals/config';

const Form = () => {
  const [framework, setFramework] = useState('');
  const { open } = useDialog();

  const onClick = () => {
    open({
      instanceName: exampleInstanceName,
      params: { buttonText: 'button_text' },
    }).then(({ action, values: { framework } = {} }) => {
      if (action === actions.success) {
        setFramework(framework);
      } else if (action === actions.cancel) {
        setFramework('');
      } else if (action === actions.close) {
        setFramework('');
      }
    });

    return null;
  };

  return (
    <>
      <InputGroup
        placeholder="what the best framework"
        value={framework}
        onChange={e => setFramework(e.target.value)}
      />
      <Button text="Open example modal" onClick={onClick} />
    </>
  );
};

export default Form;
```


##### Actions
Action is resolving modal status.

React-modaly have 3 actions: `success`, `cancel`, `close` 

---

### Example app
[Example app](https://merrickgit.github.io/react-modaly/) and [code of example app](https://github.com/MerrickGit/react-modaly/tree/master/example)

#### Use typescript

The `React-modaly` source code is written in TypeScript,
so you can rest easy that `React-modaly`'s types will always be up-to-date.

## License

MIT © [MerrickGit](https://github.com/MerrickGit)

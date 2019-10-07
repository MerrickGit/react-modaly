import React from 'react';
import { Provider as ModalProvider } from 'react-modaly';
import Form from './Form';
import modalConfig from './modals/config';
import Layout from './modals/Layout';

const MODAL_NODE = document.getElementById('modal');

const App = () => (
  <ModalProvider config={modalConfig} Layout={Layout} node={MODAL_NODE}>
    <div>
      <h1>Example app</h1>
      <Form />
    </div>
  </ModalProvider>
);

export default App;

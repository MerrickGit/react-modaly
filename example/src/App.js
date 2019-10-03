import React, { Component } from 'react';
import { Provider as ModalProvider } from 'react-modaly';
import Form from './Form';
import modalConfig from './modals/config';
import Layout from './modals/Layout';

const MODAL_NODE = document.getElementById('modal');
export default () => (
  <ModalProvider config={modalConfig} Layout={Layout} node={MODAL_NODE}>
    <div>
      <h1>Example app</h1>
      <Form />
    </div>
  </ModalProvider>
);

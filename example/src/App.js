import React from 'react';
import { Provider as ModalProvider } from 'react-modaly';
import Form from './Form';

const MODAL_NODE = document.getElementById('modal');

const App = () => (
  <ModalProvider node={MODAL_NODE}>
    <div>
      <h1>Example app</h1>
      <Form />
    </div>
  </ModalProvider>
);

export default App;

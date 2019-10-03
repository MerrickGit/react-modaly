import React, { Component } from 'react'
import { Provider, useDialog, statuses }  from 'react-modaly';

const Button = () => {
  const { open } = useDialog();

  open().then(({ action, values }) => {

  })

}

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
      </div>
    )
  }
}

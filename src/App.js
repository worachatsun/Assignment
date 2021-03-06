import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from './store' 
import RouterComponent from './config/RouterComponent'

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <RouterComponent />
      </Provider>
    )
  }
}

export default App

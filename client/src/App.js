import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import 'semantic-ui-css/semantic.min.css';
import TypeFormView from './containers/TypeformView'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <TypeFormView />
      </Provider>
    )
  }
}

export default App

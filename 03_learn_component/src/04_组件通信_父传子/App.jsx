import React, { Component } from 'react'
import Header from './c-cpns/Header'
import Main from './c-cpns/Main'
import Footer from './c-cpns/Footer'

import "./style.css"

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App
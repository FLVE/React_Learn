import React, { Component } from 'react'
import HelloWorld from './HelloWorld'

class App extends Component {
  constructor(){
    super()
    this.state = {
      isShow:true
    }
  }

  switchIsShow(){
    this.setState({isShow:!this.state.isShow})
  }

  render() {
    const {isShow} = this.state
    return (
      <div>
        <h2>哈哈哈</h2>
        <button onClick={() => this.switchIsShow()}>切换</button>
        { isShow && <HelloWorld/> }
      </div>
    )
  }
}

export default App
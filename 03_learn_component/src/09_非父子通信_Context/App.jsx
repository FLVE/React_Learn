import React, { Component } from 'react'
import Home from './Home'

import themeContext from './context/theme-context'


export class App extends Component {
    constructor(){
        super()
        this.state={
            info:{name:"why",age:24}
        }
    }
  render() {
    const {info} = this.state
    return (
      <div>
        <h2>App</h2>
        {/* 1、给Home传递数据 */}
        {/* <Home name="why" age={24}/> */}
        {/* <Home name={info.nam
        e} age={info.age}/>
        <Home {...info}/> */}

        {/* 2、普通的home */}
        {/* 第二步操作： */}
        <themeContext.Provider value={{color:"red"}}>
            <Home {...info}/>
        </themeContext.Provider>
      </div>
    )
  }
}

export default App
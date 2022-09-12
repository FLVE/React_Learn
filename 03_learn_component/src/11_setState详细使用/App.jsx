import React, { Component } from 'react'
import { flushSync } from 'react-dom'

function Hello(props) {
  return <h2>{props.message}</h2>
}


export class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: "Hello World",
            counter:0
        }
    }

    changeText(){
        setTimeout(() =>{
            // 在react18之前, setTimeout中setState操作, 是同步操作
            // 在react18之后, setTimeout中setState异步操作(批处理)
            this.setState({message:"你好呀"})
            console.log(this.state.message)
            // flushSync(() =>{
            //     this.setState({message:"你好呀"})
            // })
            console.log(this.state.message)
        },0)
    }

    increment(){

    }


  render() {
    const {message,counter} = this.state
    console.log("render被执行")
    return (
      <div>
        <h2>message:{message}</h2>
        <button onClick={e =>this.changeText()}>修改文本</button>
        <h2>当前计数：{counter}</h2>
        <button onClick={e => this.increment()}>增加</button>

        <Hello message={message}/>
      </div>
    )
  }
}

export default App
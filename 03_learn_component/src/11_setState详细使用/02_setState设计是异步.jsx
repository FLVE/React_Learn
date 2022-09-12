import React, { Component } from 'react'

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
        this.setState({
            message:"你好呀"
        })
        console.log(this.state.message)
    }

    increment(){
        // this.setState({
        //     coutner:this.state.counter+1
        // })

        // this.setState({
        //     coutner:this.state.counter+1
        // })

        // this.setState({
        //     coutner:this.state.counter+1
        // })


        // this.setState(() =>{
        //     return {
        //         counter:this.state.counter+1
        //     }
        // })
        // this.setState(() =>{
        //     return {
        //         counter:this.state.counter+1
        //     }
        // })
        // this.setState(() =>{
        //     return {
        //         counter:this.state.counter+1
        //     }
        // })
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
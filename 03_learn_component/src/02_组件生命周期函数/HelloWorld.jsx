import React, { Component } from 'react'

class HelloWorld extends Component {
    // 1、构造方法：constructor
    constructor(){
        console.log("constructor")
        super()
        this.state = {
            message:"Hello World"
        }
    }

    changeText(){
        this.setState({message: "你好啊"})
    }
    // 2、执行render函数
    render() {
        console.log("render")
        const {message} = this.state
        return (
        <div>
            <h2>{message}</h2>
            <button onClick={()=>this.changeText()}>修改文本</button>
        </div>
        )
    }
    // 3、组件被渲染到dom，被挂载到DOM
    componentDidMount(){
        console.log("componentDidMount")
    }

    // 4、组件DOM被更新完成
    componentDidUpdate(preProps,preState,snapshot){
        console.log("componentDidUpdate")
        console.log(preProps,preState,snapshot)
    }

    // 5、组件回收
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
}

export default HelloWorld
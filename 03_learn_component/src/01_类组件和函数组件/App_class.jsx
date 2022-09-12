import { Component } from 'react'


// 1、类组件
export class App extends Component {
  constructor(){
    super()
    this.state = {
      message: "App Component"
    }
  }
  render() {
    const {message} = this.state

    // 1、react元素，通过jsx编写的代码就会被编译成React.createElement,所以返回的是一个React元素
    return (
      <div>
        哈哈哈
        <h2>{message}</h2>
      </div>
    )

    // 2、组件或者fragments
    // return ['abc','vba']

    // 3、字符串/数值类型
    // return "Hello World"

    // 4、布尔类型或者null
    // return null
  }
}

export default App
import React, { Component } from 'react'
import themeContext from './context/theme-context'

export class HomeInfo extends Component {
  render() {
    // 第四步操作
    console.log(this.context)
    return (
      <div>
        HomeInfo: {this.context.color}
      </div>
    )
  }
}

// 第三步操作
HomeInfo.contextType = themeContext

export default HomeInfo
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MainBanner extends Component {
  
  render() {
    const {title,banners} = this.props
    return (
      <div className='banner'>
        <h2>封装轮播图{title}</h2>
        <ul>
          {banners.map(item =>{
            return <li key={item.acm}>{item.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

// 对传入的props进行类型验证
MainBanner.propTypes = {
  banners: PropTypes.array.isRequired,
  title: PropTypes.string
}

// 对传入的props进行默认值设置
MainBanner.defaultProps = {
  banners:[],
  title:':默认标题'
}

export default MainBanner
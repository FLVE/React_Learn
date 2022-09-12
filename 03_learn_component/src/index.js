import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App_class';
// import App from './01_类组件和函数组件/App_class'
// import App from './02_组件生命周期函数/App'
// import App from './04_组件通信_父传子/App'
// import App from './06_组件通信_案例/App'
// import App from './07_组件插槽实现/App'
// import App from './08_组件作用域插槽/App'
// import App from './09_非父子通信_Context/App'
// import App from './10_非父子通信_EventBus/App'
import App from './11_setState详细使用/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="wjf"/>
  </React.StrictMode>
);
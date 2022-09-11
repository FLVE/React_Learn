// 编写react代码，并且通过react渲染内容

import React from "react"
import ReactDOM from 'react-dom/client'
import App from "./App"


const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App/>)
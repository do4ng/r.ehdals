import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import Nav from './Components/Nav/nav'
import Bottom from './Components/Bottom/bottom'

import './Style/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav></Nav>
      <App />
      <Bottom></Bottom>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'

// Importando pagina HOME
import { Home } from './pages/Home'

// Importando CSS
import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)

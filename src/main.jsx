import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/globalStyles.js'

import AppRoutes from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/dev-movies">
      <AppRoutes />
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>,
)
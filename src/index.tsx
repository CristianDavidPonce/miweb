import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
     </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

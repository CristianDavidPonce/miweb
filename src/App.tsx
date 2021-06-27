import React from 'react'
import Box from '@material-ui/core/Box'
import { Navbar } from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Home, About } from './views'

function App () {
  return (
    <div className="App">
      <header className="Cristian Ponce">
      <Box sx={{ flexGrow: 1 }}>
          <Router>
          <Navbar/>
      <div>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/users">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      </Box>
      </header>
    </div>
  )
}

export default App

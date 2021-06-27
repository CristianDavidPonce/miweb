import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import {
  Link
} from 'react-router-dom'

interface Props {
    window?: () => Window
    children: React.ReactElement
}

interface NavProps {}

function HideOnScroll (props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })
  console.log(trigger)
  return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
  )
}
function Navbar (props: NavProps) {
  // const {} = props

  return (

    <HideOnScroll {...props}>
        <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={
              {
                mr: 2,
                color: '#fff'
              }
            }
          >
            <MenuIcon />
          </IconButton>
            <Link to="/">
            <Button
              color='inherit'
              sx={
                  {
                    color: '#fff'
                  }
              } >Inicio</Button>
            </Link>
            <Link to="/about">
            <Button
              color='inherit'
              sx={
                  {
                    color: '#fff'
                  }
              } >About</Button>
            </Link>
          <Button
            color='inherit'
            sx={
                {
                  color: '#fff'
                }
            } >Proyectos</Button>
          <Button
            color='inherit'
            sx={
                {
                  color: '#fff'
                }
            } >Blog</Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Navbar

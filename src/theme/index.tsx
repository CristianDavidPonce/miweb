import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200EA'
    },
    secondary: {
      main: '#18FFFF'
    }
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'transparent'
      }
    }
  }
})

export default theme

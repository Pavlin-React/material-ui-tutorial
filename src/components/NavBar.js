import { Button, Typography, Grid, Paper } from '@material-ui/core'
import { Toolbar, Switch } from '@material-ui/core'
import { useState } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';




const NavBar = () => {
  let [darkMode, setDarkMode] = useState( false )
  let theme = createMuiTheme( {
    palette: {
      type: darkMode ? 'dark' : 'light'
    }
  } )
  return (
    <ThemeProvider theme={ theme }>
      <Paper style={ { height: '100vh' } } elevation={ 5 }>
        <Grid container direction='column'>
          <Typography variant='h1'>This is App</Typography>
          <Button variant='container' color='primary'>This is first button</Button>
          <Button variant='container' color='secondary'>This is second button</Button>
          <Switch checked={ darkMode } onChange={ () => setDarkMode(!darkMode) }></Switch>
        </Grid>
      </Paper>
    </ThemeProvider>
  )
}

export default NavBar


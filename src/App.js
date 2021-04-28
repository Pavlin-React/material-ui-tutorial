import { Grid } from '@material-ui/core'
import NavBar from './components/NavBar'



function App() {
  return(
    <Grid container spacing={ 10 }>
      <Grid  item xs={ 12 } sm={ 6 } md={ 3 } lg={ 3 }><NavBar /></Grid>
      <Grid  item xs={ 12 } sm={ 6 } md={ 3 } lg={ 3 }><NavBar /></Grid>
      <Grid  item xs={ 12 } sm={ 6 } md={ 3 } lg={ 3 }><NavBar /></Grid>
      
    </Grid>
  )
}

export default App;



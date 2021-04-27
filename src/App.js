import { Button, Typography, makeStyles } from '@material-ui/core'
import './App.css';

function App() {

  let useStyle = makeStyles( {
    helloStyle: {
      color: 'gray'
    }
  } )
  let classes = useStyle()
  return (
    
    <div className="App">
      <Typography className={ classes.helloStyle }
      color='initial'
      variant='h4'
      >
        Hello There
      </Typography>
      <Button
      onClick={ () => { alert( 'You just clicked me !!!' ) } }
      variant='contained'
      color='primary'
      >This is my first button</Button>
    </div>
  );
}

export default App;



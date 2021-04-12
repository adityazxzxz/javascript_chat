import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import Contact from './screens/Contact'
import Grid from '@material-ui/core/Grid'

const styles = makeStyles((theme) => {
  return {
    root:{
      flexGrow:1
    }
  }
})


const App = () => {
  // return (
  //   <BrowserRouter>
  //     <Switch>
  //       <Route path='/contact'>
  //         <Contact></Contact>
  //         <Contact></Contact>
  //       </Route>
  //       <Route path='/chat'>
  //         <h1>Chat</h1>
  //       </Route>
  //     </Switch>
  //   </BrowserRouter>
  // )

  const classes = styles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
        <Contact></Contact>
        </Grid>
        <Grid item xs={8}>
          Kanan
        </Grid>
      </Grid>
    </div>
  )
}

export default App;
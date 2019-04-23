import * as React from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Home = () => (
  <div className="home">
    <Typography variant="h4" gutterBottom>
      Material-UI 
        </Typography>
    <Typography variant="subtitle1" gutterBottom>
      example project
        </Typography>
    <Button variant="contained" color="secondary" onClick={this.handleClick}>
      Super Secret Password
    </Button>
  </div>
)

export default Home

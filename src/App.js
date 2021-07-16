import { Box, Container, Grid } from '@material-ui/core';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import FormRegister from './feature/auth/pages/FormRegister';
import Header from './feature/header';
import MainContent from './feature/mainContent';
import NavBar from './feature/navbar';

function App() {
  return (
    <Router>
     <Header />
     <Box>
       <Container>
          <Grid container style={{marginTop: '70px'}}>
              <Grid item lg={3}>
                <NavBar />
              </Grid>
              <Grid item lg={9}>
                <MainContent />
              </Grid>
          </Grid>
       </Container>
     </Box>
     
   </Router>
  );
}

export default App;

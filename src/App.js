import './App.css';
import tournament_app from "./images/leaderboard_app.png"
import kings_cup from "./images/kings_cup.png"
import pokecenter from "./images/pokecenter.png"
import self from "./images/self.jpg"
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Button, Container, Drawer, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu'
import ExpandMore from '@material-ui/icons/ExpandMore';

function App() {

  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    if (drawerOpen === false){
      setDrawerOpen(true)
    }
    else{
      setDrawerOpen(false)
    }
  }
  return (
    <>
    <AppBar position='static'>   
        <Toolbar>
          
          <h1>Simon Charters</h1>
        </Toolbar>
          
    </AppBar>
      <Grid className='profile'>
        <img id='profile-pic' src={self} width='200px'/> 
        <div>
          <Container maxWidth='sm'>
          <Typography >
            I am a software developer with an aptitude for problem solving, a passion for learning and a drive for continuous improvement in everything I do. 
            With 4+ years of experience teaching music to a diverse range of students, I can communicate effectively at all levels. 
            Running my own business has also taught me how to prioritise my workload and manage expectations.
          </Typography>
          </Container>
        </div>
      </Grid>
        
        
        <Grid className='projects' container >
          <h2>Projects</h2>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
              <h3>Leaderboard App</h3>
            </AccordionSummary>
            <AccordionDetails>
              <div>
              <img src={tournament_app} width="100%"></img>
              <p>
                A 5 a side tournament tracker with a random team generator.
                It can save players, matches, teams and seasons to a database and display leaderboards for all time and current seasons.
              </p>
              <ul>
                <li>
                  Utilising Java, Javascript, HTML, CSS, PostgreSQL
                </li>
                <li>
                  Frameworks: Spring backend, React frontend
                </li>
              </ul> 
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
              <h3>Kings Cup Game</h3>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <img src={kings_cup} width="100%"/> 
              <p>
              Vue.js JavaScript web application using external and internal APIs. 
              Kings Cups is a card game which allows for social interaction during lockdown. 
              The host can add players to the game, track scores and display game stats. 
              </p>
              <ul>
                <li>
                  Utilising JavaScript, Vue.js, MongoDB, HTML, CSS, Google Charts
                </li>
              </ul>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
              <h3>Vet Managment App</h3>
            </AccordionSummary>
            <AccordionDetails>
              <div>
              <img src={pokecenter} width="100%"/>
              <p>
              A Pokemon themed web application which allows a veterinary clinic to register owners, check-in pets and assign vet staff for treatment. 
              Built using Python and Flask and storing data using an SQL database.
              </p>
              <ul>
                <li>
                  Full CRUD functionality 
                </li>
                <li>
                  Utilising Python, Flask, HTML, CSS, SQL
                </li>

              </ul>
              
              </div>
            </AccordionDetails>
          </Accordion>


        </Grid>
      
      
    </>
  );
}

export default App;

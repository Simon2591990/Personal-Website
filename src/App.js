
import './App.css';
import tournament_app from "./images/leaderboard_app.png"
import kings_cup from "./images/kings_cup.png"
import pokecenter from "./images/pokecenter.png"
import { Accordion, AccordionDetails, AccordionSummary, Button, CardHeader, Drawer, Grid } from '@material-ui/core';
import { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
      <Grid className="header" container justify="center" >
        <header>
          <h1>Simon Charters</h1>
        </header>
        <Button onClick={toggleDrawer}>|||</Button>
      </Grid>
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} >
          <h2>Languages</h2>
          <ul>
            <li>
              Python
            </li>
            <li>
              JavaScript
            </li>
            <li>
              Java
            </li>
          </ul>
        </Drawer>
        <Grid>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
              <h1>Leaderboard App</h1>
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
              <h1>Kings Cup Game</h1>
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
              <h1>Vet Managment App</h1>
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

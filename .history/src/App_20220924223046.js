import React from "react";
import axios from "axios";
import { useState } from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { CssBaseline } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import OutlinedInput from "@mui/material/OutlinedInput";

import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Grid from "@mui/material/Grid";

function App() {
  const [searchPlayer, setSearchPlayer] = useState("");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = "c4eb3244-2494-4789-a6a3-47b4f6d5b70a";

  function fetchPlayerData(event) {
    var API_KEY = "RGAPI-e5d7e95c-8a4e-4469-bf42-53bc6d1175b3";
    var API_CALL_STRING =
      "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
      searchPlayer +
      "?api_key=" +
      API_KEY;
    axios
      .get(API_CALL_STRING)
      .then(function (response) {
        //Success

        setPlayerData(response.data);
      })
      .catch(function (error) {
        //Error
        console.log(error);
      });
  }

  return (
    <div className="App">
      <CssBaseline />

      <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>
<CssBaseline />
<AppBar position="static">
        <Toolbar variant="dense" style={{ height: "80px" }}>
          <SportsEsportsIcon></SportsEsportsIcon>
          <Typography variant="h2" component="h2">
            LEAGUE OF LEGENDS SUMMONER'S RIFT SEARCHER
          </Typography>
        </Toolbar>
      </AppBar>
      <Box>
        <OutlinedInput
          onChange={(e) => setSearchPlayer(e.target.value)}
          type="text"
          placeholder="Summoner's name"
          style={{ height: "80px", width: "500px" }}
        ></OutlinedInput>
        <Button
          onClick={fetchPlayerData()}
          variant="contained"
          style={{ height: "80px" }}
        >
          Search player
        </Button>
      </Box>
      {JSON.stringify(playerData.data)}

      <List
      sx={{ width: '100%', maxWidth: 1300, bgcolor: 'lightblue' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <Typography variant="h6">
         Summoner's profile
        </Typography>
      }
    >
      {/* <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
     */}
 <ListItemText>
  <Typography variant="h7">
    Summoner's name:{searchPlayer}
  </Typography>
 </ListItemText>
 <ListItemText>
  <Typography variant="h7">
    Summoner's PUUID:{playerData.puuid}
  </Typography>
 </ListItemText>
 </List>
  
   
</Grid> 
      
    </div>
  );
}

export default App;

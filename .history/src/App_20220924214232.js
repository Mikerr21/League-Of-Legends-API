import React from "react";
import axios from "axios";
import { useState } from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { CssBaseline } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./App.css";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>)


function App() {
  const [searchPlayer, setSearchPlayer] = useState("");
  const [playerData,setPlayerData]= useState({});
  const API_KEY ="c4eb3244-2494-4789-a6a3-47b4f6d5b70a";
 
  function fetchPlayerData(event){

    var API_KEY = "RGAPI-e5d7e95c-8a4e-4469-bf42-53bc6d1175b3";
    var API_CALL_STRING ="https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchPlayer + "?api_key=" +API_KEY;
    axios.get(API_CALL_STRING).then(function (response) {
      //Success
      
      setPlayerData(response.data);
    }).catch(function(error){
      //Error
      console.log(error)
    })
  }

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar variant="dense" style={{ height: "80px" }}>
          <SportsEsportsIcon></SportsEsportsIcon>
          <Typography variant="h5" component="h2">
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
        <Button onClick={fetchPlayerData()} variant="contained" style={{ height: "80px" }}>
          Search player
        </Button>
      </Box>
      {JSON.stringify(playerData.data) != '{}' ? 
      <Typography>We have player data here</Typography>
       : 
      <Typography>No player data detected</Typography>}
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default App;

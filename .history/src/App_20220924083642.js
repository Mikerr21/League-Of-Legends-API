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

function App() {
  const [searchPlayer, setSearchPlayer] = useState("");
  const API_KEY ="c4eb3244-2494-4789-a6a3-47b4f6d5b70a";
  console.log(searchPlayer);


  function fetchPlayerData = ()=>{

    var API_KEY = "RGAPI-20062666-997b-40d1-af0c-ca2ed8d80cfa"
    var API_CALL_STRING ="euw1.api.riotgames.com"
  // API REQUEST

  //Manage API CALL



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
    </div>
  );
}

export default App;

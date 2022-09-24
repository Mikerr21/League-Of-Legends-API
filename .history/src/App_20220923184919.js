import React from "react";
import { useState } from "react";
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import {CssBaseline} from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import OutlinedInput from '@mui/material/OutlinedInput';
import './App.css';
import { Typography } from "@mui/material";
import {Button} from "@mui/material";


function App() {





  return (
    <div className="App">
      <CssBaseline />
     
<AppBar position="static" >
  <Toolbar variant="dense" style={{height:'80px'}}>
    <SportsEsportsIcon></SportsEsportsIcon>
    <Typography variant="h5" component="h2">
  LEAGUE OF LEGENDS SUMMONER'S RIFT SEARCHER
</Typography>
  </Toolbar>
</AppBar>
<OutlinedInput type="text" placeholder="Summoner's name" style={{height:'80px',width:"500px"}} ></OutlinedInput>
<Button variant="contained" style={{height:'80px'}}>Search player</Button>
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";



import './App.css';
import { Typography } from "@mui/material";
function App() {
  return (
    <div className="App">
      {/* <Typography variant="h3" component="h2">
  LEAGUE OF LEGENDS SUMMONER'S RIFT SEARCHER
</Typography>; */}
<AppBar position="static">
  <Toolbar variant="dense">
    
    <Typography variant="h6" color="inherit" component="div">
      Photos
    </Typography>
  </Toolbar>
</AppBar>
    </div>
  );
}

export default App;

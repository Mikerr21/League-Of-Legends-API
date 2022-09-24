import React from "react";
import { useState } from "react";
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import {CssBaseline} from "@mui/material";


import './App.css';
import { Typography } from "@mui/material";
function App() {
  return (
    <div className="App">
      <CssBaseline />
     
<AppBar position="static" >
  <Toolbar variant="dense" m={5}>
    
    <Typography variant="h4" component="h2">
  LEAGUE OF LEGENDS SUMMONER'S RIFT SEARCHER
</Typography>
  </Toolbar>
</AppBar>
    </div>
  );
}

export default App;

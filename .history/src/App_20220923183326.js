import React from "react";
import { useState } from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {FastfoodIcon} from "@mui/icons-material";
import { CssBaseline } from "@mui/material";
import { FastForward } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Input } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar variant="dense" color="black">
          <FastfoodIcon />
          <Box m={1} pt={1}>
            <Typography
              variant="h4"
              color="white"
              align="center"
              component="div"
            >
              SIMPLE FOOD SEARCH & CALCULATOR
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      </div>
  );
}

export default App;

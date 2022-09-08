import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Nav2() {
 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography align="center" variant="h3" component="div" sx={{ flexGrow: 1 }}>
            ComicBox
        </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
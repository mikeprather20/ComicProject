import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function Nav() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography align="center" variant="h3" component="div" sx={{ flexGrow: 1 }}>
            ComicBox
        </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

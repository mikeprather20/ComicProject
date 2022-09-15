import React, {useContext, useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoginContext } from '../SharedState';
import {  useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const theme = createTheme();

export default function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [loggedIn,] = useContext(LoginContext)
  const uid = sessionStorage.getItem('userId')
  const [seconds, setSeconds] = useState(3);
  const navigator = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    return fetch(`/users/${uid}/edit`, {
      'method': 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        email: data.get('email'),
        password: data.get('password'),
      })
    })
    // Navigate To ComicBox Successful Login
    .then(response => response.json())
    .then(data => 
      {console.log(data);
        setShowModal(true);
      })
  };
  
  // useEffect(() => {
  //   if(!loggedIn && seconds > 0){
  //     const intervalId = setInterval(() => {
  //       setSeconds(prev=>prev-1);
  //     }, 1000);
  //     return () => clearInterval(intervalId);
  //   }
  // },[seconds]);
  // if(!loggedIn){
  //   setTimeout(()=>{
  //     navigator('/')
  //   },3000)
  //   return <div>
  //     <h1 style={{textAlign:'center'}}>YOU DIDN'T SAY THE MAGIC WORD! {seconds}</h1>
  //     <img src="https://c.tenor.com/Smf_tFZV2AAAAAAM/dennis-nedry-laughing-hysterically.gif" alt="" />
  //     </div>
  // }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <EditIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Profile
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
        <Modal
          onClose={()=>setShowModal(false)}
          open={showModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Successfully updated profile.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            </Typography>
          </Box>
        </Modal>
      </Container>
    </ThemeProvider>
);
}
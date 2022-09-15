import React,{useState,useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { LoginContext } from '../SharedState';

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

export default function Login(){
  const [showModal,setShowModal]=useState(false)
  const [loggedIn,setLoggedIn] = useContext(LoginContext)
  
  // Assign Use Navigate Constant
  const navigate = useNavigate()
  const saveUser = (user)=>{
    sessionStorage.setItem('userId', user.id);//CHANGE THIS TO THE USER ID RETURNED FROM BACKEND
    sessionStorage.setItem('user_comics', [])
    setLoggedIn(true)
    navigate('/search', user.data)
  }
  // Login Submit Button
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  
    // Send Request To Flask
    return await fetch('http://127.0.0.1:5000/api/login', {
      'method': 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        username: data.get('username'),
        password: data.get('password'),
      })
    })
    // Navigate To ComicBox Successful Login
    .then(response => response.json())
    .then(data => data.status === 'ok' ? saveUser(data.data) : setShowModal(true))
    .catch(error => setShowModal(true))
  };

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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Register now."}
                </Link>
              </Grid>
            </Grid>
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
              Error
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Login Failed.
            </Typography>
          </Box>
        </Modal>
      </Container>
    </ThemeProvider>
  );
}
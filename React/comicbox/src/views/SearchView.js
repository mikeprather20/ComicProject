import React, { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { ComicBoxContext, LoginContext } from '../SharedState';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //need to make it contenual or load per scroll
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

export default function SearchComic() {
  const [cards,setCards] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");
  const [showModal,setShowModal]=useState(false);
  const [loading,setLoading] = useState(false);
  const [loggedin, ]= useContext(LoginContext);
  const [userComics, setUserComics] = useContext(ComicBoxContext)
  const user_id = sessionStorage.getItem('userId')
  const [seconds, setSeconds] = useState(3);
  const navigate = useNavigate()
  
  
  const searchApi = ()=>{
  
  setLoading(true)
    fetch(`https://comicvine.gamespot.com/api/issues/?api_key=0978691a57028b3778e6de7880829c6d07b312a1&format=json&sort=name:asc&filter=name:${searchTerm}`)
      .then((res)=>res.json()).then(results=>(setCards(results.results),setLoading(false))).catch(e=>console.log(e))
  } 
  
  const handleAddToLibrary =(comic)=>{
    /*
      const req = {
        user_id: user_id,
        comic: {
          issue_img: comic.image.medium_url,
          volume: comic.volume.name,
          issue_number: comic.issue_number,
          issue_name: comic.name,
        }
    }
    return fetch('/api/box/add/',
    {
      method: "POST",
      body: JSON.stringify(req)
  }
    ).then(
      (res)=>{console.log(res.json())}
    )
    */
      // userComics[comic.name] = comic
      // setUserComics(userComics)
      // console.log(userComics)
  };

  useEffect(() => {
    if(!loggedin && seconds > 0){
      const intervalId = setInterval(() => {
        setSeconds(prev=>prev-1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  },[seconds]);
console.log(loggedin)
  if(!loggedin){
    setTimeout(()=>{
      navigate('/')
    },3000)
    return <h1 style={{textAlign:'center'}}>Ah, ah, ah, you didn't say the magic word! {seconds}</h1>
  }
  console.log(loggedin)
  
  return (
  <div>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Search for Comic
            </Typography>
            <div class="container">
            <div class="row height d-flex justify-content-center align-items-center">
              <div class="col-md-8">
                <div class="d-flex gap-1 justify-content-center">
                  {
                    loading ? <h3 class="text-center">Searching ... </h3>
                    :
                    <>
                        <TextField 
                    variant="outlined" 
                    label="Search Comic"
                    onChange={(e)=>setSearchTerm(e.currentTarget.value)} />
                  {/* <button class="btn btn-primary">Search</button> */}
                  <Button 
                    variant="contained" 
                    style={{height:54}}
                    onClick={()=>searchApi()}>Search</Button>
                    </>
                  }
                  <i class="fa fa-search"></i>
                  {/* <input type="text" class="mx-auto" placeholder="Search Comic"/> */}
                
                </div>
              </div>
            </div>
            </div>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">

          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.image.medium_url}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                    </Typography>
                    <Typography>
                      Issue #{card.issue_number} <br/>
                      {card.volume.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button 
                      size="small"
                      onClick={()=>{
                        setShowModal(true);
                        console.log(showModal);
                        handleAddToLibrary(card);
                      }}
                    >Add to Box</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Modal
          onClose={()=>setShowModal(false)}
          open={showModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Added comic to your box!
            </Typography>
          </Box>
        </Modal>
        </Container>
      </main>
    </ThemeProvider>
    </div>
  );
}










































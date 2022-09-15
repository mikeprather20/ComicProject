import React, { useContext, useEffect, useState } from 'react';
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
import Modal from '@mui/material/Modal';
import { ComicBoxContext, LoginContext } from '../SharedState';
import { Navigate, useNavigate } from 'react-router-dom';

const stat_cards={
  " Superman - Birthright 2": {
      "aliases": null,
      "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-898479/",
      "cover_date": "2015-11-01",
      "date_added": "2021-12-16 21:19:07",
      "date_last_updated": "2021-12-16 21:24:50",
      "deck": "     ",
      "description": null,
      "has_staff_review": false,
      "id": 898479,
      "image": {
          "icon_url": "https://comicvine.gamespot.com/a/uploads/square_avatar/0/3125/8291788-dc41.jpg",
          "medium_url": "https://comicvine.gamespot.com/a/uploads/scale_medium/0/3125/8291788-dc41.jpg",
          "screen_url": "https://comicvine.gamespot.com/a/uploads/screen_medium/0/3125/8291788-dc41.jpg",
          "screen_large_url": "https://comicvine.gamespot.com/a/uploads/screen_kubrick/0/3125/8291788-dc41.jpg",
          "small_url": "https://comicvine.gamespot.com/a/uploads/scale_small/0/3125/8291788-dc41.jpg",
          "super_url": "https://comicvine.gamespot.com/a/uploads/scale_large/0/3125/8291788-dc41.jpg",
          "thumb_url": "https://comicvine.gamespot.com/a/uploads/scale_avatar/0/3125/8291788-dc41.jpg",
          "tiny_url": "https://comicvine.gamespot.com/a/uploads/square_mini/0/3125/8291788-dc41.jpg",
          "original_url": "https://comicvine.gamespot.com/a/uploads/original/0/3125/8291788-dc41.jpg",
          "image_tags": "All Images"
      },
      "associated_images": [],
      "issue_number": "41",
      "name": " Superman - Birthright 2",
      "site_detail_url": "https://comicvine.gamespot.com/dc-comics-graphic-novel-collection-41-superman-bir/4000-898479/",
      "store_date": null,
      "volume": {
          "api_detail_url": "https://comicvine.gamespot.com/api/volume/4050-101446/",
          "id": 101446,
          "name": "DC Comics Graphic Novel Collection",
          "site_detail_url": "https://comicvine.gamespot.com/dc-comics-graphic-novel-collection/4050-101446/"
      }
  },
  " Wie Supermans Superanzug entstand": {
      "aliases": null,
      "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-898376/",
      "cover_date": "1966-10-01",
      "date_added": "2021-12-15 17:55:37",
      "date_last_updated": "2021-12-15 17:58:59",
      "deck": "   ",
      "description": null,
      "has_staff_review": false,
      "id": 898376,
      "image": {
          "icon_url": "https://comicvine.gamespot.com/a/uploads/square_avatar/0/3125/8290389-sup196602.jpg",
          "medium_url": "https://comicvine.gamespot.com/a/uploads/scale_medium/0/3125/8290389-sup196602.jpg",
          "screen_url": "https://comicvine.gamespot.com/a/uploads/screen_medium/0/3125/8290389-sup196602.jpg",
          "screen_large_url": "https://comicvine.gamespot.com/a/uploads/screen_kubrick/0/3125/8290389-sup196602.jpg",
          "small_url": "https://comicvine.gamespot.com/a/uploads/scale_small/0/3125/8290389-sup196602.jpg",
          "super_url": "https://comicvine.gamespot.com/a/uploads/scale_large/0/3125/8290389-sup196602.jpg",
          "thumb_url": "https://comicvine.gamespot.com/a/uploads/scale_avatar/0/3125/8290389-sup196602.jpg",
          "tiny_url": "https://comicvine.gamespot.com/a/uploads/square_mini/0/3125/8290389-sup196602.jpg",
          "original_url": "https://comicvine.gamespot.com/a/uploads/original/0/3125/8290389-sup196602.jpg",
          "image_tags": "All Images"
      },
      "associated_images": [],
      "issue_number": "196602",
      "name": " Wie Supermans Superanzug entstand",
      "site_detail_url": "https://comicvine.gamespot.com/superman-196602-wie-supermans-superanzug-entstand/4000-898376/",
      "store_date": null,
      "volume": {
          "api_detail_url": "https://comicvine.gamespot.com/api/volume/4050-75392/",
          "id": 75392,
          "name": "Superman",
          "site_detail_url": "https://comicvine.gamespot.com/superman/4050-75392/"
      }
  },
  "...And then Superman": {
      "aliases": null,
      "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-475417/",
      "cover_date": "2015-03-01",
      "date_added": "2015-01-05 20:57:55",
      "date_last_updated": "2020-04-23 22:54:15",
      "deck": null,
      "description": "<p><em>Continued from the pages of last month’s BATMAN/SUPERMAN #17! Lobo’s on mission to save Earth, and he doesn’t have time for distractions – especially from the Last Son of Krypton! Get ready for Lobo versus Superman!</em></p>",
      "has_staff_review": false,
      "id": 475417,
      "image": {
          "icon_url": "https://comicvine.gamespot.com/a/uploads/square_avatar/6/67663/4315064-04.jpg",
          "medium_url": "https://comicvine.gamespot.com/a/uploads/scale_medium/6/67663/4315064-04.jpg",
          "screen_url": "https://comicvine.gamespot.com/a/uploads/screen_medium/6/67663/4315064-04.jpg",
          "screen_large_url": "https://comicvine.gamespot.com/a/uploads/screen_kubrick/6/67663/4315064-04.jpg",
          "small_url": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4315064-04.jpg",
          "super_url": "https://comicvine.gamespot.com/a/uploads/scale_large/6/67663/4315064-04.jpg",
          "thumb_url": "https://comicvine.gamespot.com/a/uploads/scale_avatar/6/67663/4315064-04.jpg",
          "tiny_url": "https://comicvine.gamespot.com/a/uploads/square_mini/6/67663/4315064-04.jpg",
          "original_url": "https://comicvine.gamespot.com/a/uploads/original/6/67663/4315064-04.jpg",
          "image_tags": "All Images"
      },
      "associated_images": [],
      "issue_number": "4",
      "name": "...And then Superman",
      "site_detail_url": "https://comicvine.gamespot.com/lobo-4-and-then-superman/4000-475417/",
      "store_date": "2015-01-07",
      "volume": {
          "api_detail_url": "https://comicvine.gamespot.com/api/volume/4050-77220/",
          "id": 77220,
          "name": "Lobo",
          "site_detail_url": "https://comicvine.gamespot.com/lobo/4050-77220/"
      }
  },
  "...Clark Kent Is Superman!": {
      "aliases": null,
      "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-280269/",
      "cover_date": "2011-09-01",
      "date_added": "2011-07-20 04:24:39",
      "date_last_updated": "2011-08-08 10:44:14",
      "deck": null,
      "description": "<p><i>In issue #12, Batman begins connecting Luthor, Brainiac, the Exobytes and the survivors from The Daily Planet. But will he be in time to help Superman's worsening condition?</i></p>",
      "has_staff_review": false,
      "id": 280269,
      "image": {
          "icon_url": "https://comicvine.gamespot.com/a/uploads/square_avatar/6/67663/1947092-12.jpg",
          "medium_url": "https://comicvine.gamespot.com/a/uploads/scale_medium/6/67663/1947092-12.jpg",
          "screen_url": "https://comicvine.gamespot.com/a/uploads/screen_medium/6/67663/1947092-12.jpg",
          "screen_large_url": "https://comicvine.gamespot.com/a/uploads/screen_kubrick/6/67663/1947092-12.jpg",
          "small_url": "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/1947092-12.jpg",
          "super_url": "https://comicvine.gamespot.com/a/uploads/scale_large/6/67663/1947092-12.jpg",
          "thumb_url": "https://comicvine.gamespot.com/a/uploads/scale_avatar/6/67663/1947092-12.jpg",
          "tiny_url": "https://comicvine.gamespot.com/a/uploads/square_mini/6/67663/1947092-12.jpg",
          "original_url": "https://comicvine.gamespot.com/a/uploads/original/6/67663/1947092-12.jpg",
          "image_tags": "All Images"
      },
      "associated_images": [],
      "issue_number": "12",
      "name": "...Clark Kent Is Superman!",
      "site_detail_url": "https://comicvine.gamespot.com/dc-universe-online-legends-12-clark-kent-is-superm/4000-280269/",
      "store_date": "2011-07-20",
      "volume": {
          "api_detail_url": "https://comicvine.gamespot.com/api/volume/4050-38217/",
          "id": 38217,
          "name": "DC Universe Online Legends",
          "site_detail_url": "https://comicvine.gamespot.com/dc-universe-online-legends/4050-38217/"
      }
  }
}

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

export default function ComicBox() {
  const [cards, setCards] = useState(stat_cards)
  const [showModal,setShowModal]=useState(false);
  const [userComics, setUserComics] = useContext(ComicBoxContext)
  const uid = sessionStorage.getItem('userId')
  const [loggedIn,] = useContext(LoginContext)
  
  const [seconds, setSeconds] = useState(3);
  const navigator = useNavigate()
  /*
  useEffect(()=>{
    fetch(`http://127.0.0.1:5000/api/comicbox/${uid}`).then(res=>res.json()).then(results=>setCards(results.data))
  },[])
  */

  const removeFromBox = (comic_name) => {
    delete cards[comic_name]
    setCards(cards)
  }

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
  //     Navigator('/')
  //   },3000)
  //   return <div>
  //           <h1 style={{textAlign:'center'}}>YOU DIDN'T SAY THE MAGIC WORD! {seconds}</h1>
  //           <img src="https://thumbs.gfycat.com/CostlyDopeyAcornwoodpecker-size_restricted.gif" alt="" />  
  //           </div>
  // }
  // console.log(userComics);

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
              My Comics
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">

          <Grid container spacing={4}>
            {Object.values(cards).map((card) => (
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
                        removeFromBox(card.name);
                      }}
                    >Remove from Box</Button>
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
              Removed comic from your box!
            </Typography>
          </Box>
        </Modal>
        </Container>
      </main>
    </ThemeProvider>
    </div>
  );
}
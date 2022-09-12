import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//import Container from '@mui/material/Container';



export default function ComicBoxComp(user) {

  //FUNCTION FOR REMOVING COMIC FROM USERS COMICBOX AND CHANGING IT IN THE DATABASE

  const removeFromBox = async (comic) => {
    const res = await fetch('http://localhost:5000/user/comic/remove', {
        method: "POST",
        body: JSON.stringify({ comicId: comic.id })
    });
    const data = await res.json();
    console.log(data)
};


const handleClick = (comic) => {
    removeFromBox(comic);
    if(user.token) {
        removeFromBox(comic)
      }
    };


    //THIS IS A SINGLE CARD DISPLAY

  return (
    <div>
{/* <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
              <Grid xs={12} sm={6} md={4}> */}
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image=" IMAGE URL OF THE COMIC HERE "
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Name of comic
                    </Typography>
                    <Typography>
                      This is where the...
                      issue number
                      and volume go.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={(comic)=>{handleClick(comic)}} size="small">Remove</Button>
                  </CardActions>
                </Card>
              {/* </Grid>
          </Grid>
        </Container> */}

    </div>
  )
}

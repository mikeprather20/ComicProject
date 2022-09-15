import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function SearchComp(comic, addToBox, user) {


//THIS IS THE FUNCITON TO GET THE INFO FROM COMIC VINE API





    //THIS IS A FUNCTION THAT ADDS AND SAVES A COMIC TO A USERS COMIC BOX
    //AND STORES THE COMIC DATA IN OUR API SO WE DONT HAVE TO CALL FOR IT AGAIN

    const addToBoxAPI = async (comic) =>{
      const res = await fetch('http://localhost:5000/api/box/add', {
          method: "POST",
          headers: {
              "content-Type": "application/json",
              Authorization: `Bearer ${user.token}`
          },
          body: JSON.stringify({comicId: comic.id})
      });
      const data = await res.json();
      console.log(data)
  };

  const handleClick = (comic) =>{
      addToBox(comic)
      if (user.token){
          addToBoxAPI(comic)
      }
  };




  //THIS RETURNS RETURNS A SINGLE CARD LAYOUT
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
                    <Button onClick={(comic)=>{handleClick(comic)}} size="small">Add to Box</Button>
                  </CardActions>
                </Card>
              {/* </Grid>
          </Grid>
        </Container> */}
    </div>
  )
};
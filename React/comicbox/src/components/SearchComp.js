import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';
// import Input from '@mui/material/Input';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//import Container from '@mui/material/Container';

export default function SearchComp(coimic, user) {


    //THIS IS AN ATTEMPT AT MAKING A SEARCHBAR TO SEARCH  COMIC VINE API
    // FOR A COMIC WITH THE TEXT INPUT THAT THE USER GAVE
    const SearchBar = ({ placeholder, onChange, searchBarWidth }) => {
        return (
            // <Box sx={{ display: 'flex', alignItems: 'center' }}>
            //     <SearchIcon sx={{ marginRight: '10px' }} />
            //     <Input
            //         placeholder={placeholder}
            //         onChange={onChange}
            //         sx={{width: searchBarWidth, color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem'}}
            //         disableUnderline
            //     />
            // </Box>

            //THIS IS A BOOTSTRAP SEARCH BAR
            <div class="container">
            <div class="row height d-flex justify-content-center align-items-center">
              <div class="col-md-8">
                <div class="search">
                  <i class="fa fa-search"></i>
                  <input type="text" class="form-control" placeholder="Search Comic"/>
                  <button class="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
            </div>

        )
    }

    //THIS IS A FUNCTION THAT ADDS AND SAVES A COMIC TO A USERS COMIC BOX
    //AND STORES THE COMIC DATA IN OUR API SO WE DONT HAVE TO CALL FOR IT AGAIN

    const addToBox = async (comic) =>{
        const res = await fetch('/comicbox/<comic_id>/add', {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify({ComicId: comic.id})
        });
        const data = await res.json();
        console.log(data)
    };

    const handleClick = (comic) =>{
        addToBox(comic)
        if (user.token){
            addToBox(comic)
        }
    };




  //THIS RETURNS THE SEARCHBAR AND RETURNS A SINGLE CARD LAYOUT
  return (
    <div>

        {SearchBar}

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


// card
// section.py-5
// .container.px-4.px-lg-5.mt-5
//   .row.gx-4.gx-lg-5.row-cols-2.row-cols-md-3.row-cols-xl-4.justify-content-center
//     .col.mb-5
//       .card.h-100
//         // Comic Image
//          img.card-img-top(src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg', alt='...')
//           // Comic details
//             .card-body.p-4
//               .text-center
//              // Comic Name
//                  h5.fw-bolder Comic name here
//                  // comic volume and issue
//                | comic volume $ issue#
//                 //action
//                 .card-footer.p-4.pt-0.border-top-0.bg-transparent
//             .text-center
//      a.btn.btn-outline-dark.mt-auto(href='#') Add to Box
//    .col.mb-5
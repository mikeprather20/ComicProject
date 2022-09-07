import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


//small nav/app bar missing drawer and profile icon with link to edit profile
//has search bar for searching user collection? not sure if it would mess up the search
//for comic in in database to put into users collection

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ComicBox
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


//#OLD BOOTSTRAP NAV BAR

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';


// export default class Nav extends Component {

//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">!#React#!</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon">[nav]</span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Todolist">To Do List</Link>
//               </li>

//               {this.props.user.username ?
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/">Hello, {this.props.user.username}</Link>
//                   </li>
//                   <li className="nav-item" onClick={this.props.logMeOut}>
//                     <Link className="nav-link" to="/">Log Out</Link>
//                   </li>
//                 </>
//                 :
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/Signup">Sign Up</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/Login">Log In</Link>
//                   </li>
//                 </>
//               }
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Marketplace
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li><Link className="dropdown-item" to="/Shop">Shop</Link></li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li><Link className="dropdown-item" to="/Cart">My Cart {this.props.cart.length} | {this.getSubTotal()} </Link></li>
//                 </ul>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     )
//   }
// }




//#rfc

// import React from 'react'

// export default function Nav() {
//   return (
//     <div>Nav</div>
//   )
// }
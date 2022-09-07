


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


//# Tutor

// import { AppBar, Toolbar, Typography } from '@mui/material';
// import React from 'react';

// export default function Navbar(ignore) {
//   return (
//     <AppBar position="fixed" color="primary">
//       <Toolbar>
//         <Typography variant="h6">
//           Hello
//         </Typography>
//       </Toolbar>
//     </AppBar>
//     ignore
//   );
// }

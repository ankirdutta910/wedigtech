import React from 'react'
// import Logo from './assets/img/logo.jpg'

function Navbar() {
  return (
   
    //<img src={Logo} alt="logo" style={{width: 'auto', height: '50px'}}/>
    <>
     <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style={{height: '70px', backgroundColor: 'black'}}>
     <a class="navbar-brand" style={{fontWeight: '800'}} href="/"> WeDig<span style={{color: '#f7cf1b'}}>Tech</span></a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarText" style={{backgroundColor: 'black'}}>
       <ul class="navbar-nav mr-auto">
       {/* SPACE */}
       </ul>
       <span class="navbar-text" style={{padding: '7px'}}>
       <ul class="navbar-nav mr-auto">
         <li class="nav-item active">
           <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
         </li>
         <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
          <a class="dropdown-item bg-dark" href="/">Web Development</a>
          <a class="dropdown-item bg-dark" href="/">App Development</a>
          <a class="dropdown-item bg-dark" href="/">Graphic Design</a>
          <a class="dropdown-item bg-dark" href="/">Web Design</a>
          <a class="dropdown-item bg-dark" href="/">Content Writing</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item bg-dark" href="/">Photography</a>
        </div>
      </li>
         <li class="nav-item">
           <a class="nav-link" href="/">About Us</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="/">Contact</a>
         </li>
         <li class="nav-item" style={{marginRight: '40px'}}>
           <a class="nav-link" href="/">Pricing</a>
         </li>
     
         <li class="nav-item" style={{marginRight: '40px'}}>
          <h6 class="nav-link" style={{backgroundColor: 'white', color: 'black', fontWeight: '500', borderRadius: '3px', padding: '7px'}}><i class="fa fa-phone"></i> 91-7086952212</h6>
       </li>
       </ul>
      
       </span>
       
     </div>
   </nav>
      
   </>
  )
}

export default Navbar

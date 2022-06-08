import React from 'react'

import '../App.css'

function Home() {
  return (
    <div>
       <section id="hero">
    <div class="hero-container">
   
        <div class="container">
             
                    <h1>One Stop Solution For Your <br></br>Digital Needs</h1>
                    <h6>We provide <span>web development, app development, graphic design, web design & photography</span></h6>
                 

                    <form class="form-inline">
                        <div class="form-group mb-2">
                          <select style={{color: 'grey', fontWeight: '500'}} class="nav-link dropdown-toggle" href="/" id="homeselect" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <option class="dropdown-item bg-light" style={{color: 'grey', fontWeight: '400'}} readonly>What Are You Looking For?</option>
                          <option class="dropdown-item bg-light" style={{color: 'grey', fontWeight: '400'}} value="">Web Development</option>
                          <option class="dropdown-item bg-light" style={{color: 'grey', fontWeight: '400'}} value="">App Development</option>
                          <option class="dropdown-item bg-light" style={{color: 'grey', fontWeight: '400'}} value="">Web Design</option>
                          <option class="dropdown-item bg-light" style={{color: 'grey', fontWeight: '400'}} value="">Graphic Design</option>
                          <option class="dropdown-item bg-light" style={{color: 'grey', fontWeight: '400'}} value="">Photography</option>
                        </select>
                        </div>
                     
                        <button type="submit" class="btn mb-2 mx-2" style={{paddingLeft: '20px', paddingRight: '20px', backgroundColor: '#f7cf1b'}}>Search</button>
                    
                   </form>



            
        </div>                  

       
       
     
         </div>
       </section>

       
 

  </div>

      
  )
}

export default Home

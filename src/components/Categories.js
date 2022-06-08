import React from 'react'
import Webdev from './assets/img/webdev.jpg'
import Appdev from './assets/img/appdev.jpg'
import Webdesign from './assets/img/webdesign.jpg'
import Gdesign from './assets/img/graphicdesign.jpg'
import Cwriting from './assets/img/cwriting.jpg'
import Photography from './assets/img/photography.jpg'


function Categories() {
  return (
    <>
    <div className="container my-5">
         <h2 className="container text-center">Trending Top Categories</h2>
         <h6 className="container text-center" style={{color: 'gray'}}>Services offered by most experienced professionals.</h6>

         <div class="container-fluid my-5">
               <div class="row">
                    <div class="col-sm my-2">
                      <div class="card bg-light" style={{cursor: 'pointer'}}>
                         <img class="card-img-top" src={Webdev} alt="Card"/>
                         <div class="card-body">
                              <h5 class="card-text text-center">Web Development</h5>
                              <p class="container text-center" style={{backgroundColor: '#f7cf1b', fontWeight: '500', color: 'black', width: '68%', borderRadius: '2px', fontSize: '13px', padding: '5px'}}>4 variants available</p>
                         </div>
                      </div>
                    </div>

                    <div class="col-sm my-2">
                      <div class="card bg-light" style={{cursor: 'pointer'}}>
                         <img class="card-img-top" src={Appdev} alt="Card"/>
                         <div class="card-body">
                         <h5 class="card-text text-center">App Development</h5>
                         <p class="container text-center" style={{backgroundColor: '#f7cf1b', fontWeight: '500', color: 'black', width: '68%', borderRadius: '2px', fontSize: '13px', padding: '5px'}}>4 variants available</p>
                         </div>
                      </div>
                    </div>

                    <div class="col-sm my-2" >
                       <div class="card bg-light" style={{cursor: 'pointer'}}>
                         <img class="card-img-top" src={Webdesign} alt="Card"/>
                         <div class="card-body">
                         <h5 class="card-text text-center">Web Design</h5>
                         <p class="container text-center" style={{backgroundColor: '#f7cf1b', fontWeight: '500', color: 'black', width: '68%', borderRadius: '2px', fontSize: '13px', padding: '5px'}}>4 variants available</p>
                         </div>
                       </div>
                    </div>
               </div>


               {/* Second row */}

               <div class="row">
                    <div class="col-sm my-2">
                      <div class="card bg-light" style={{cursor: 'pointer'}}>
                         <img class="card-img-top" src={Gdesign} alt="Card"/>
                         <div class="card-body">
                         <h5 class="card-text text-center">Graphic Design</h5>
                         <p class="container text-center" style={{backgroundColor: '#f7cf1b', fontWeight: '500', color: 'black', width: '68%', borderRadius: '2px', fontSize: '13px', padding: '5px'}}>4 variants available</p>
                         </div>
                      </div>
                    </div>

                    <div class="col-sm my-2">
                      <div class="card bg-light" style={{cursor: 'pointer'}}>
                         <img class="card-img-top" src={Cwriting} alt="Card"/>
                         <div class="card-body">
                         <h5 class="card-text text-center">Content Writing</h5>
                         <p class="container text-center" style={{backgroundColor: '#f7cf1b', fontWeight: '500', color: 'black', width: '68%', borderRadius: '2px', fontSize: '13px', padding: '5px'}}>4 variants available</p>
                         </div>
                      </div>
                    </div>

                    <div class="col-sm my-2">
                       <div class="card bg-light" style={{cursor: 'pointer'}}>
                         <img class="card-img-top" src={Photography} alt="Card"/>
                         <div class="card-body">
                         <h5 class="card-text text-center">Photography</h5>
                         <p class="container text-center" style={{backgroundColor: '#f7cf1b', fontWeight: '500', color: 'black', width: '68%', borderRadius: '2px', fontSize: '13px', padding: '5px'}}>4 variants available</p>
                         </div>
                       </div>
                    </div>
               </div>
          </div>


      
    </div>

<div className="container" style={{paddingTop: '20px', paddingBottom: '20px', backgroundColor: '#f7cf1b', borderRadius: '10px'}}>
<div className="row" >
     <div className="col-lg">
           <h5 style={{fontWeight: '400'}}>Need A Guide To Help You Choosing A Service?</h5>
           <p style={{fontWeight: '400'}}>Click on <span style={{fontWeight: '600'}}>Get Started</span> so that we can connect you to the right technical advisor.</p>
     </div>
     <div className="col-lg">
         <button className="btn" style={{float: 'right', backgroundColor: 'black', marginTop: '5px', color: 'white', paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px', paddingBottom: '10px'}}>Get Started</button> 
     </div>

</div>

</div>

</>
  )
}

export default Categories

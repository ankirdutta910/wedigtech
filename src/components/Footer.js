import React from 'react'
import '../App.css'

function Footer() {
  return (
     <div class="mt-5">
            
            <div class="card" >
                <div class="row mb-4 ">
                    
                    <div class="col-md-4 col-sm-11 col-xs-11 my-3">
                        <div class="footer-text pull-left">
                             <div class="d-flex">
                                 <h1 class="font-weight-bold mr-2 px-3" style={{color: '#fff', backgroundColor: '#f7cf1b'}} > T </h1>
                                 <h2 style={{color: '#f7cf1b'}}>WeDigTech</h2>
                             </div>
                             <p class="card-text">A one stop destination for Web Development, App Development, Web Designing, Graphic Designing & Content Writing.</p>

                             <div class="social mt-2 mb-3 ">

                                <i class="fa fa-facebook-official fa-lg" ></i>
                                <i class="fa fa-instagram fa-lg"></i>
                                <i class="fa fa-twitter fa-lg"></i>
                                <i class="fa fa-linkedin-square fa-lg"></i>
                                <i class="fa fa-facebook"></i>

                             </div>
                         
                         </div>
                    </div>
                    
                    
                    <div class="col-md-2 col-sm-1 col-xs-1 mb-2"></div>
                    
                    <div class="col-md-2 col-sm-4 col-xs-4 my-3">
                 
                        <h5 class="heading">Services</h5>
                        <ul >
                            <li>Web Development</li>
                            <li>App Development</li>
                            <li>Graphic Design</li>
                            <li>Web Design</li>
                            <li>Content Writing</li>
                         
                        </ul>
                 
                    </div>
                 
                 
                    <div class="col-md-2 col-sm-4 col-xs-4 my-3">
                 
                        <h5 class="heading">Informations</h5>
                        <ul class="card-text">
                            <li>About Us</li>
                            <li>Vision & Mission</li>
                            <li>Contact Us</li>
                            <li>Portfolio</li>
                        </ul>
                 
                    </div>

                 
                     <div class="col-md-2 col-sm-4 col-xs-4 my-3">

                        <h5 class="heading">Earn With Us</h5>
                        <ul class="card-text">
                            <li>Become A Partner</li>
                            <li>Become An Agent</li>
                            <li>Become A Service Provider</li>
                        
                           
                        </ul>

                     </div>

                </div>
                
                
                <div class="divider mb-4" >   
                </div>
    
               
                <div class="row" style={{fontSize: '10px'}}>
                
                <div class="col-md-6 col-sm-6 col-xs-6">
                    
                    <div class="pull-left">
                        
                        <p><i class="fa fa-copyright"></i> 2020 wedigtech.com</p>
                        
                    </div>
                    
                </div>
                
                

                <div class="col-md-6 col-sm-6 col-xs-6">
                   
                   
                    <div class="pull-right mr-4 d-flex policy">
                        
                       <div>Terms of Use</div>
                       <div>Privacy Policy</div>
                       <div>Cookie Policy</div>
                        
                    </div>
                    
                    
                    
                </div>
                 
                 
                 
             </div>
            </div>
            
        </div>
  )
}

export default Footer

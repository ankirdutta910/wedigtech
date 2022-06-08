import React from 'react'
import Static from './assets/img/development/static.jpg'
import Dynamic from './assets/img/development/dynamic.jpg'
import Ecom from './assets/img/development/ecom.jpg'
import Custom from './assets/img/development/custom.jpg'
import EcomApp from './assets/img/development/ecomapp.jpg'
import MvendorApp from './assets/img/development/mulvendor.jpg'
import OTTApp from './assets/img/development/ott.jpg'
import CustomApp from './assets/img/development/customapp.jpg'
import Article from './assets/img/development/article.jpg'
import SocialMedia from './assets/img/development/socialmedia.jpg'
import ProductDes from './assets/img/development/productdes.jpg'
import CaseStudy from './assets/img/development/casestudy.jpg'
import Dstatic from './assets/img/development/dstatic.jpg'
import Dcom from './assets/img/development/decom.jpg'
import Ddynamic from './assets/img/development/ddynamic.jpg'
import Dcustom from './assets/img/development/dcustom.jpg'

import { Link } from "react-router-dom";



function Services() {
  return (
    <>
    <div className="container" style={{marginTop: '100px'}}>
    <h2 className="container text-center">Top Selling Web Development Services</h2>
         <h6 className="container text-center" style={{color: 'gray'}}>Most Affordable & World Class Web Portals Services</h6>


          <div className="row my-5">
               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={Static} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Static Website Development Service</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 3,999</span></p>
                              <Link to="/staticwebsitedev" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</Link>
                             
                         </div>
                      </div>
               </div>

               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={Dynamic} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Dynamic Website Development Services</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 5,999</span></p>
                              <Link to="/dynamicwebsitedev" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</Link>
                         </div>
                      </div>
               </div>


               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={Ecom} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Ecommerce Website Development Services</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 12,990</span></p>
                              <Link to="/ecommercewebsitedev" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</Link>
                         </div>
                      </div>
               </div>


               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={Custom} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Custom Website Development Services</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 10,000</span></p>
                              <Link to="/customwebsitedev" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</Link>
                         </div>
                      </div>
               </div>

          </div>

    </div>



    {/* Service 2 */}

    <div className="container" style={{marginTop: '100px'}}>
    <h2 className="container text-center">Top Selling App Design Services</h2>
         <h6 className="container text-center" style={{color: 'gray'}}>Most Affordable & World Class Mobile Apps Services</h6>


          <div className="row my-5">
               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={EcomApp} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Ecommerce Mobile App Development Services</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 39,990</span></p>
                              <Link to="/ecommerceapp" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</Link>
                         </div>
                      </div>
               </div>

               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={MvendorApp} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Multivendor Mobile App Development Services</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 49,999</span></p>
                              <Link to="/multivendorapp" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</Link>
                         </div>
                      </div>
               </div>


               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={OTTApp} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Video Streaming App (OTT) Development Services</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 32,999</span></p>
                              <Link to="/ottapp" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</Link>
                         </div>
                      </div>
               </div>


               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={CustomApp} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Custom Mobile App Development Services</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 9,999</span></p>
                              <Link to="/customapp" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</Link>
                         </div>
                      </div>
               </div>

          </div>

    </div>



{/* Service 3 */}

    <div className="container" style={{marginTop: '100px'}}>
    <h2 className="container text-center">Top Selling Web Design Services</h2>
         <h6 className="container text-center" style={{color: 'gray'}}>Most Affordable & World Class Web Design Services</h6>


          <div className="row my-5">
               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={Dstatic} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Static Website Design Service</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 2,990</span></p>
                              <a href="/" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</a>
                         </div>
                      </div>
               </div>

               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={Ddynamic} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Dynamic Website Design Services</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 4,999</span></p>
                              <a href="/" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</a>
                         </div>
                      </div>
               </div>


               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={Dcom} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Ecommerce Website Design Services</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 8,990</span></p>
                              <a href="/" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</a>
                         </div>
                      </div>
               </div>


               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={Dcustom} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Mobile Website Design Services</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 9,990</span></p>
                              <a href="/" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</a>
                         </div>
                      </div>
               </div>

          </div>

    </div>



    {/* Service 4 */}

    <div className="container" style={{marginTop: '100px'}}>
    <h2 className="container text-center">Top Selling Content Writing Services</h2>
         <h6 className="container text-center" style={{color: 'gray'}}>Most Affordable & World Class Content Writing Services</h6>


          <div className="row my-5">
               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={Article} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Article And Blog Writing Services</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 699</span></p>
                              <a href="/" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</a>
                         </div>
                      </div>
               </div>

               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={SocialMedia} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Social Media Copywriting Services</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 999</span></p>
                              <a href="/" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</a>
                         </div>
                      </div>
               </div>


               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={ProductDes} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Product Description Writing Services</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 699</span></p>
                              <a href="/" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</a>
                         </div>
                      </div>
               </div>


               <div className="col-sm my-2">
               <div style={{cursor: 'pointer', border: '1px solid #cfcfcf', borderRadius: '5px'}}>
                         <img class="card-img-top" style={{padding:'2px', borderRadius: '5px'}} src={CaseStudy} alt="Card"/>
                         <div className="text-center" style={{padding: '4px'}}>
                              <h6 style={{fontSize: '19px', color: 'grey'}}>Case Studies Research & Writing Services</h6>
                              <p style={{ fontWeight: '400',  fontSize: '15px', padding: '5px'}}>Starts from <span style={{ color:'red', fontSize: '18px', fontWeight: '500'}}>₹ 799</span></p>
                              <a href="/" class="btn" style={{backgroundColor:'#f7cf1b', color:'black', fontSize: '13px',marginBottom: '7px'}}>Know more</a>
                         </div>
                      </div>
               </div>

          </div>

    </div>
      
    </>
  )
}

export default Services

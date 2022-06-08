import React from 'react'
import './Design.css'
import GoToTop from '../GoToTop'


function AppDev({title, image, price1, price2, price3}) {
  return (
    <>
     <GoToTop />

	{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">{title} App Development Service</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

	 <form>
      <div className="modal-body">
	
  <div class="form-group row">
    <label for="inputEmail" class="col-sm-4 col-form-label">Email</label>
    <div class="col-sm-8">
      <input type="email" class="form-control" id="inputEmail" placeholder="Email"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="inputPhone" class="col-sm-4 col-form-label">Contact no.</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="inputPhone" placeholder="Contact No."/>
    </div>
  </div>

  <div class="form-group row">
    <label for="AppType" class="col-sm-4 col-form-label">Application Type</label>
    <div class="col-sm-8">
    <select style={{fontSize: '13px'}} class="form-control" id="inputtype">
		   <option value="Android">{title} Android Application[{price1}]</option>
		   <option value="IOS">{title} IOS Application[{price2}]</option>
		   <option value="Android + IOS">{title} Android + IOS Application</option>
	   </select>
    </div>
  </div>
 
	  
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success">Save changes</button>
      </div>
	 </form>
    </div>
  </div>
</div>




{/* Main */}

    <div className="main-content my-5">
		<div className="container">
			<div className="row">
				<div className="content col-md-8 col-sm-12 col-xs-12">
					
					
				
					<div className="section-block">
						<div className="tab-content">
							<div role="tabpanel" className="tab-pane active" id="about">
								<div className="about-information">
									<h1 className="section-title">{title} App Development Service</h1>
									<img className="responsive" style={{width: '100%', height: 'auto'}} src={image} alt="" />
									
									</div>
							</div>
						
						</div>
					</div>

                         <div className="section-block">
                         <div className="tab-content">
							<div role="tabpanel" className="tab-pane active" id="about">
								<div className="about-information">
									<h1 className="section-subtitle">Description</h1>
									<h6 style={{fontSize: '16px'}}>Hosting Environment:</h6>
									<p>
										<ul>
											<li>1 Domain Name</li>
											<li>SSL Certificate For Security</li>
										</ul>
									</p>
									<h6 style={{fontSize: '16px'}}>Website Design:</h6>
									<p>
										<ul>

										<li>Quick Loading Time</li>
										<li>Clean and Modern Frontend & Admin Interface.</li>
										<li>100% Responsive Design.</li>
										<li>Product Attribute Option.</li>
										<li>Attribute Wise Product Price</li>
										<li>Click to Call Facility</li>
										<li>Whatsapp Chat or Live Chat Integration</li>
										<li>Unlimited Color Option</li>
                                                  <li>Video Tutorials</li>
                                                  <li>Announcement & Popup Module</li>
                                                  <li>Custom CSS Settings</li>
                                                  <li>100% Secure Admin Dashboard</li>
                                                  <li>Currency Management</li>
                                                  <li>Dynamic Color Management</li>
                                                  <li>FAQ Management</li>
                                                  <li>Product Reviews Management</li>
                                                  <li>Dynamic Page Management</li>
									
										</ul></p>

								

							

										<h6 style={{fontSize: '16px'}}>Backup & Technical Support:</h6>
										<p>
										<ul>
											<li>Yearly Website Backup</li>
											<li>Virus and Malware Scanning</li>
											<li>On Demand Remote Support</li>
										</ul></p>
								</div>
							</div>
						
						</div>
					</div>

				</div>
			
				<div className="content col-md-4 col-sm-12 col-xs-12">
					<div style={{ position: 'sticky', top: '75px'}}>
					<div style={{backgroundColor: '#fc9403'}} className="section-block">
					<p style={{fontWeight: '500'}}>Starting from</p>
					<h3 style={{color: 'white',marginTop: '-16px', fontSize: '40px', fontWeight: 'bold'}}>{price1} <span style={{fontSize: '12px'}}>[ Android ]</span></h3>
					
					</div>

                         <div style={{backgroundColor: '#fc9403', marginTop:'-15px'}} className="section-block">
					<p style={{fontWeight: '500'}}>Starting from</p>
					<h3 style={{color: 'white',marginTop: '-16px', fontSize: '40px', fontWeight: 'bold'}}>{price2} <span style={{fontSize: '12px'}}>[ IOS ]</span></h3>
					
					</div>

                         <div style={{backgroundColor: '#fc9403', marginTop:'-15px'}} className="section-block">
					<p style={{fontWeight: '500'}}>Starting from</p>
					<h3 style={{color: 'white',marginTop: '-16px', fontSize: '40px', fontWeight: 'bold'}}>{price3} <span style={{fontSize: '12px'}}>[ Android + IOS ]</span></h3>
					
					</div>
				
					<div className="section-block fixed" >
					
						
                                   <h6>All Our Services Comes With</h6>
							<p>
                                        <ol>
                                             <li>Premium Quality Service</li>
                                             <li>Dedicated Account Manager</li>
                                             <li>Handhold Support</li>
                                             <li>Strong After Sale Support</li>
                                             <li>100% Statisfaction Guaranteed</li>
                                        </ol>
                                   </p>
							<button type="button" class="btn btn-danger container" data-toggle="modal" data-target="#exampleModalCenter">
  								BOOK NOW </button>
							
						
						
					</div>
				
				</div>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default AppDev

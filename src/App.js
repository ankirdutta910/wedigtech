import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Categories from './components/Categories';
import Services from './components/Services'
import Footer from './components/Footer'
import SWDev from './services/SWDev'
import AppDev from './services/AppDev'


function App() {
  return (
    <Router>
     
      <Navbar/>
      <Routes>
         <Route path="/" element={<><Home/><Categories/><Services/></>}/>

{/* Web Development Start */}
         <Route path="/staticwebsitedev"  element={<><SWDev title="Static" price="₹ 3,999" image="https://www.learncomputerscienceonline.com/wp-content/uploads/2019/07/Web-Design-And-Development-.jpg"/> </>}/>
         <Route path="/dynamicwebsitedev"  element={<><SWDev title="Dynamic" price="₹ 5,999" image="https://img.freepik.com/free-psd/hiking-concept-web-template_23-2148467097.jpg?t=st=1654527523~exp=1654528123~hmac=c4bd8563534bef61eb652fa343cc191a3b3d725cd4ac15feab4e2261b6b7907d&w=1380"/> </>}/>
         <Route path="/ecommercewebsitedev"  element={<><SWDev title="Ecommerce" price="₹ 12,990" image="https://img.freepik.com/free-vector/banner-with-phone-cart-gift-bags-isolated-white-background-vector-illustration_548887-134.jpg?t=st=1654527834~exp=1654528434~hmac=48f4b42d332829b981f45b01e092ab011416bf25532ee2b1eace8679a65d5073&w=1380"/> </>}/>
         <Route path="/customwebsitedev"  element={<><SWDev title="Custom" price="₹ 10,000" image="https://img.freepik.com/free-psd/letterpress-inspired-web-design-template_23-2149146604.jpg?t=st=1654527779~exp=1654528379~hmac=0bc115437d3c86bfc5205a2cbce7ce807f2b0d76fc3e5f503e2db54479c080c0&w=1380"/> </>}/>
{/* Web Development End */} 

{/* App Development Start */}
         <Route path="/ecommerceapp" element={<><AppDev title="Ecommerce" price1="₹ 39,999" price2="₹ 42,999" price3="₹ 45,999" image="https://img.freepik.com/free-vector/digital-marketing-concept-online-shopping-mobile-application_68971-367.jpg?w=1380"/> </>}/>
         <Route path="/multivendorapp" element={<><AppDev title="Multivendor" price1="₹ 49,999" price2="₹ 52,999" price3="₹ 55,999" image="https://img.freepik.com/free-photo/marketplace-online-illustration-3d-style-internet-multi-vendor-store-laptop-computer-with-multi-vendor-stores-green-tones-gadget-notebook-screen-with-bank-credit-card-3d-rendering_156429-3476.jpg?w=1060" /></>}/>
         <Route path="/ottapp" element={<><AppDev title="Video Streaming App (OTT)" price1="₹ 32,999" price2="₹ 38,999" price3="₹ 42,999" image="https://img.freepik.com/free-psd/youtube-mobile-phone-mockup_106244-1675.jpg?t=st=1654536871~exp=1654537471~hmac=a39368b9a8e01d9f00857198a8adbea414a16f1781f956599ebfcf091cf994d3&w=1060" /></>}/>
         <Route path="/customapp" element={<><AppDev title="Custom" price1="₹ 9,999" price2="₹ 12,990" price3="₹ 14,999" image="https://img.freepik.com/free-vector/charity-app-concept_23-2148608518.jpg?t=st=1654535421~exp=1654536021~hmac=612cdd3c7d3c61b100993fac32035af3ddab3043b16c33a9265411b01a90f795&w=996" /></>}/>



{/* App Development End */}      
      </Routes>
      <Footer/>
    </Router>
   
   
   
  );
}

export default App;

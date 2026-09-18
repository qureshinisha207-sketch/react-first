import React from "react";
import Footerlogo from '/src/assets/nexoralogo(2).png'

   function Footer(){
    return(
        <>
          <footer className="footer-section">
            <div className="footer-section-inner">
               <div className="footer-inner">
                <img src={Footerlogo}/>
                 <h4>Premium technology, expertly assembled and backed for the long run.</h4>
               </div>
               <div className="company-section">
                <h3>Company</h3>
                <ul>
                    <li>Search</li>
                    <li>About us</li>
                    <li>Shipping & Return</li>
                    <li>Cancellation & Refund policy</li>
                    <li>Contact Us</li>
                    <li>Disclaimer policy</li>
                    <li>Privacy policy</li>
                    <li>Terms of services</li>
                    <li>Refund policy</li>
                </ul>
               </div>
               <div className="">
                  <h3>Get Update</h3>
                  <h4>New drops and deals, no spam.</h4>
               </div>
            </div>
          </footer>
        </>
    )
   }

   export {Footer}
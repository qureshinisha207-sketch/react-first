import React from "react";
import Shopbanner from "../assets/ShopBanner.png"
  function ShopBanner(){
    return(
        <>
        <div className="shop-banner-section">
        <div className="shop-banner">
            <img src={Shopbanner}/>
        </div>
         <div className="shop-banner-text">
            <h3>Latest technology</h3>
            <h1>Upgrade your everyday tech.</h1>
            <h2>Shop powerful laptops, desktops, components and accessories—all in one place.</h2>
            <button>Shop now →</button>
         </div>

        </div>
        </>
    )
  }

   export {ShopBanner}
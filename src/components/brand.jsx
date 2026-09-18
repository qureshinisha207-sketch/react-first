import React from "react";
import Brandlogo1 from '/src/assets/brandlogo1.jpg';
import Brandlogo2 from '/src/assets/AMD-Logo.avif';
import Brandlogo3 from '/src/assets/Intel_logo.avif'
import Brandlogo4 from '/src/assets/asus_logo.webp'
import Brandlogo5 from '/src/assets/Corsair_logo.avif'
import Brandlogo6 from '/src/assets/samsung_logo.avif'


  function Brand(){
    return (
        <>
         <div className="powered-brand-section">
            <div className="powered-name">Powered by the brands you trust</div>
            <div className="powered-img">
                <img src={Brandlogo1}/>
                <img src={Brandlogo2}/>
                <img src={Brandlogo3}/>
                <img src={Brandlogo4}/>
                <img src={Brandlogo5}/>
                <img src={Brandlogo6}/>
            </div>
         </div>
        </>
    )
  }


  export {Brand}
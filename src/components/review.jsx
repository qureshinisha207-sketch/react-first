import React from "react";
import {ReviewCard}  from "../data/reviewdata"
 function Review(){
    return(
        <>
        <div className="review-section-header">Loved by 40,000+ builders</div>
        <div className="review-section">
          {
            ReviewCard.length>0?
            <>
             {
                ReviewCard.map((ele,index)=>{
                    return(
                        <>
                        <div className="review-card">
                        <h2>{ele.star}</h2>
                        <h3>{ele.reviews}</h3>
                        <h4>{ele.reviewers}</h4>
                        </div>
                        </>
                    )
                })
             }
            </>
            :<>Error</>
          }
        </div>
        </>
    )
 }

  
 export {Review}
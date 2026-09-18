import React from "react";
import { item } from "../data/categorydata";

 function Category(){
    return(
        <>
        <div className="shop-category">Shop by Categories</div>
        <div className="category-section">
                 {
                    item.length> 0 ?
                    <>
                    {
                        item.map((ele,index)=> {
                            return(
                                <>
                                <div className="cateory-item" >
                                 <img src={ele.image}/>
                                 <h2>{ele.itemname}</h2>
                                </div>
                                </>
                            )
                        }
                        )
                    }
                    </>
                     :
                        <>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
                        </>
                 }

        </div>
        </>
    )
 }

  export {Category}
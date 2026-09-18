import React, { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";
import {useParams} from "react-router-dom"


   function ProductDetail(){
    
    const{id} = useParams()
    const [Product,setproduct] = useState()

    async function GetProduct(){
        const response = await fetch(`http://localhost:2000/TrendCard/${id}`)
        const result = await response.json();
        
        setproduct(result)
    }
    useEffect(()=>{
        GetProduct();
    },[id])

    if(!Product){
        return<h2>Loading..</h2>
    } 

    return(
        <>
        <Navbar/>

        <div className="product-detail-section">
            <div className="product-detail-img"><img src={Product.image}/></div>
            <div className="product-detail-card-section">
             <h4>{Product.itemname}</h4>
             <h1>{Product.itemdetail}</h1>
             <h2>{Product.price}</h2 >
             <button>Add to cart</button>
            </div>
        </div>
        </>
    )
   }

    export {ProductDetail}
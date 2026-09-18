import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function Trendproduct() {
     
    // const [allproduct, setallproduct] = useState([])
    // const [filterproduct, setfilterproduct] = useState(allproduct)

    // function Searchproducts(e) {
    //     const getvalue = e.target.value.toLowerCase();
    //     const filteredproduct =
    //         allproduct.filter((ele) => ele.product.toLowerCase().includes(getvalue))
    //     if (getvalue) {
    //         setfilterproduct(filteredproduct)
    //     } else {
    //         setfilterproduct(allproduct)
    //     }
    // }


    const [TrendCard, setproducts] = useState([])

    async function getProducts() {
        const response = await fetch("http://localhost:2000/productCard")
        const data = await response.json();

        setproducts(data)
    }
    useEffect(() => {
        getProducts();
    }, [])




    return (
        <>
        <button className="search-btn">Search</button>
        {/* <input onChange={ Searchproducts }type="text" placeholder="What are you looking for?🔍"/> */}
            <div className="product-section-trend">Trending Now</div>
            <div className="product-card-trend">
                {
                    TrendCard.length > 0 ?
                        <>
                            {
                                TrendCard.map((ele) => {
                                    return (
                                        <>
                                            <div className="trend-card" key={ele.id}>
                                               <Link to={`/product`}> <img src={ele.image} /></Link>
                                                <h4>{ele.itemname}</h4>
                                                <h2>{ele.itemdetail}</h2>
                                                <h3>₹ {ele.price}</h3>
                                                <button>Add</button>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </>
                        :
                        <>Error</>
                }
            </div>
        </>
    )
}


export { Trendproduct }
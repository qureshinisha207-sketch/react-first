import React from "react";
import { CardData } from "../data/productcarddata";

function ProductCard() {
    return (
        <>
        <div className="product-card-main-section">
            <div className="productcard-section">
                <h1>Laptops</h1>
                <h4>Browse our range of new and renewed laptops — from budget everyday machines to high-performance gaming laptops. Brands include Dell, HP, Lenovo, Acer, Asus, and Apple.</h4>
            </div>
            <div className="product-card-section">
                {
                    CardData.length > 0 ?
                        <>
                            {
                                CardData.map((ele, index) => {
                                    return (
                                        <>
                                            <div className="product-card">
                                                <img src={ele.image} />
                                                <h4>{ele.itemname}</h4>
                                                <h2>{ele.itemdetail}</h2>
                                                <h3>₹ {ele.price}</h3>
                                                <button>Add</button>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </> :
                        <>Error</>
                }
            </div>
            </div>
        </>
    )
}

export { ProductCard }
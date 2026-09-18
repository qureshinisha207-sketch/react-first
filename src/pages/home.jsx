import React from "react";
import {Navbar} from "../components/navbar"
import Banner from "../components/banner"
import { Category } from "../components/category";
import { Trendproduct } from "../components/trendproduct";
import { ShopBanner } from "../components/shopbanner";
import { Review } from "../components/review";
import { Brand } from "../components/brand";
import { Email } from "../components/email";
import { Footer } from "../components/footer";
import { ProductCard } from "./productcard";

function Home(){
    return(
        <>
        <Navbar/>
        <Banner/>
        <Category/>
        <Trendproduct/>
        <ShopBanner/>
        <Review/>
        <Brand/>
        <Email/>
        <Footer/>
        <ProductCard/>
        </>
    )
}

  export {Home}
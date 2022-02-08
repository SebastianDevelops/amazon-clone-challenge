import React from "react";
import "./Home.css"
import Product from "../Product/Product"

const Home = () =>{
    return(
        <div className="home">
            <div className="home__container">
                <img
                className="home__image"
                src="https:images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="" 
                />

                <div className="home__row">
                    <Product 
                        id="13247543"
                        title="The lean startup" 
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5} 
                        />
                    <Product 
                        id="49538094"
                        title="Amazon Basics 10 Port USB 2.0 Hub, 5-Pack"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71iHt4s8vkL._AC_SX522_.jpg"

                    />
                </div>

                <div className="home__row">
                    <Product id="495793"
                        title="LED Redragon Mechanical Gaming Ketboard"
                        price={720.0}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61DT+r681TL._AC_UL320_.jpg"
                        />
                    <Product id="6743547"
                        title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
                        price={3999.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/615YaAiA-ML._AC_UL320_.jpg"
                        />
                    <Product id="57392747"
                        title="PlayStation DualSense Wireless Controller – Midnight Black"
                        price={500}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/61O9tWR6WDS._AC_UL320_.jpg"
                        />
                </div>

                <div className="home__row">
                   <Product id="573753347"
                        title="SAMSUNG 65-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN65AU8000FXZA, 2021 Model), Black"
                        price={17899.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_UL320_.jpg"
                        />
                </div>

            </div>
        </div>
    )
}

export default Home
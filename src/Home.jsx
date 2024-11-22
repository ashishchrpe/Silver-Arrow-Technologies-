import React from "react";
import "./Home.css"
import About from './About';
import Contact from "./Contact";
import Products from "./Products";

function Home(){
    return(
        <div className="conatinar" style={{backgroundColor:"black"}}>
            <div>
            <img style={{width:"99%"}} src="Images\HP_Rotating_Winter_6Nov2024_dvd5nc.webp"/>
            </div>
            <div className="p-4 sm:w-90%">
                <img id="JackpotIMG" style={{marginLeft:'15%'}} src="Images\HP_Jackpot_xfhk46.webp"/>         
            </div>
            <div className="" style={{display:"flex" ,marginLeft:'5%'}}>
                <div>
                  <img style={{width:'90%'}} src="Images\neu_offers_desk_tkq4lf.webp" />
                </div>
                <div>
                    <img style={{width:'90%'}} src="Images\HP_2Split_MFYMP_Brands_HDFC_ICIC_30May2024_kzbaou.webp"/>
                </div>
            </div>

            <h3 className="p-3 fs-4" style={{color:"white", marginLeft:"5%" , marginTop:"5%"}}>Exciting Bank Offers For You</h3>

            <div className="" style={{display:"flex" ,marginLeft:'5%'}}>
            
                <div>
                
                  <img style={{width:'90%'}} src="Images\neu_offers_desk_tkq4lf.webp" />
                </div>
                <div>
                    <img style={{width:'90%'}} src="Images\HP_2Split_MFYMP_Brands_HDFC_ICIC_30May2024_kzbaou.webp"/>
                </div>
            </div>
            <Products/>
            <About/>
            <Contact/>
        </div>
    );
}

export default Home;
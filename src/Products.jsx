import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";

function Products(){
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8080/data").then((res) => {
  
        setData(res.data);
        // console.log(res);
      });

    }, []);
    const labels = data.map((subArray)=>{
        // console.log(subArray.brand);
    });
    return(
        <div className="conatinar">
            <div id="item1">
            <div id="items" >
            {data.map((item) => {
               

               return (
                 <div className="d-flex p-1 border-bottom item3" style={{width:"35%"}}>
                    <div  className="p-3">
                     <img style={{width:"100px"}} src={item.imageUrl}/>
                    </div>
                    <div >
                       <h5 className="pt-2"><b>{item.brand} </b></h5>
                       <h6>Color:-{item.color}</h6>
                       <p style={{width:"90%" }}>${item.price}</p>
                       <p>{item.rating} <i class="fa fa-star-o" aria-hidden="true"></i> &  {item.category}</p>
                   </div>
                   </div>
                 
               );
             })}
             </div>
        </div>
        </div>
    );
}

export default Products;
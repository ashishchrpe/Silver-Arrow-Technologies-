import React, {  useState } from "react";
import {Link, useNavigate} from "react-router-dom";




function Signup(){

    const [cont, setCount]=useState([{username:"",email:"",password:""}]);
    const navigate= useNavigate();
    let changeState=(event)=>{
       setCount((currname)=>{
        return{...currname,[event.target.name]:(event.target.value)}
       })
    };
    let handleSubmit=async(event)=>{
     event.preventDefault();   
     
     const data=await fetch('http://localhost:8080/signup',{
        method:'POST',
       
        body:JSON.stringify(cont),
        headers:{
          'Content-Type':'application/json'
        }
      }
     
    );
      getHandle();
      
    };
    
  let getHandle=async()=>{
    const data=await fetch('http://localhost:8080/signup',{
        method:'GET',
      }
     
    );
      Redirect();
     
  };
  let Redirect=()=> {

    navigate("/");
  }
    return(
        <div className="container" style={{color:'white', backgroundColor:"black"}}>
            <div className="row my-5 p-5">
                <div className=" col-6 mt-5"> 
                    <img src="Images\th.jpeg" style={{width:"90%"}}/>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                    <h1 className="fs-3 pt-5 mt-5">Signup now</h1>
                    <h2 className="fs-5 my-4 text-muted">Or track your existing application</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username" >Username</label>
                        <input className="mb-2" type="text" name="username" id="username" placeholder="enter username" onChange={changeState} required/>
                        <p className="mt-2">
                        <label htmlFor="email" className="mr-2" >Email</label>
                        <input  type="email" id="email" name="email" onChange={changeState} placeholder="enter user email id!" required/>
                        </p>
                        <label htmlFor="password" >Password</label>
                        <input className="mb-2" type="password" id="password" name="password" onChange={changeState} placeholder="enter password" required/>
                        <br/>
                        <button style={{width:"40%" ,margin:"0 auto"}} className="p-2 mb-3 mt-23 fs-5 btn btn-primary">continue</button>
                    </form>
                    
                    
                    
                     <Link class="nav-link active " style={{color:"blue"}} to={"/login"}>Want to open an NRI account?/Login</Link>
                          
                </div>
                
             
            </div>

        </div>
    )
}

export default Signup;
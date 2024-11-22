import React from "react";

function Contact(){
    return(
        <div className="conatinar text-center" style={{backgroundColor:"black"}}>
            <div className="row py-5 " >
                <div className="col-2"></div>
                <div className="col-3" >
                    <h1 style={{color: "#c0daed"}}>Contact Me</h1>
                    <img id="img" src="Images\Contact Img.png" style={{width:"55%"}}/>
                </div>
                <div className="col-7 mt-5">
                    <form  onSubmit={{}}>
                    <input className="my-2" style={{width:"75%"}} placeholder="Enter your email "/><br></br>
                    <input className="my-2" style={{width:"75%"}} placeholder="Full your name "/><br></br>
                    <textarea className="my-2" style={{width:"75%"}} placeholder="Enter your message "></textarea>
                    <p><button>Submit</button></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
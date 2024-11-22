import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
 

  return (
    <>
      <footer style={{background:"black"}}>
        <div className="container ml-5 border-top" style={{paddingLeft :"8%" , color:'white'}}>
            <div className="row mt-5 f-space">
            <div className="col-6 mb-4">
              <Link class="navbar-brand"  to={"/"}><img src="Images\Croma_Logo_acrkvn.svg" style={{width:"55%"}} alt="logo"/></Link>
               <p className="my-3"><i class="fa fa-envelope-o" aria-hidden="true"></i> aashishchrpe@gmail.com</p>
               <a href='https://m.facebook.com/ashish.charpe.39/' style={{color:"white" , textDecoration:"none"}}> <i class="mx-2 mt-4 fs-2 fa fa-facebook-official" aria-hidden="true"></i>  </a>
               
               <a href="https://github.com/ashishchrpe/" style={{textDecoration:"none", color:"white"}}><i class="mx-2 mt-4 fs-2 fa fa-github" aria-hidden="true"></i></a>

               <a href="https://www.instagram.com/charpe678/" style={{textDecoration:"none", color:"white"}}><i class="mx-2 mt-4 fs-2 fa fa-instagram" aria-hidden="true"></i></a>

               <a href="https://www.linkedin.com/in/ashish-charpe-b50552263/" style={{textDecoration:"none", color:"white"}}><i class="mx-2 mt-4 fs-2 fa fa-telegram" aria-hidden="true"></i></a>

               <a href="https://www.linkedin.com/in/ashish-charpe-b50552263/" style={{textDecoration:"none", color:"white"}}><i class="mx-2 fs-2 fa fa-linkedin" aria-hidden="true"></i></a>
            </div>
            <div className="col-3">
                <h3>Contact Me</h3>
                <h5 >Mobile Nubmber 8358990366</h5>
            </div>
            <div className="col-3">
             <p id="Img" className='fs-5'><i>Design By :- <b >Ashish Charpe</b></i></p>
            </div>
            </div>
        </div>
       </footer> 
    </>
  )
}

export default Footer;

import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <>
   
           <div>
            <nav class="navbar navbar-expand-lg border-bottom " id='NavBar' style={{background:"black", }}>
                <div class="container-fluid">
                    <Link class="navbar-brand mx-2" to={"/"}><img src="Images\Croma_Logo_acrkvn.svg" style={{width:"45%"}} alt="logo"/></Link>
                    
                    
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 " style={{marginLeft:"45%"}}>
                            <li class="nav-item mx-2">
                                <Link class="nav-link active" aria-current="page" to={"/"}><b style={{color:"white"}}>Home</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={"/signup"}><b style={{color:"white"}}>Signup</b></Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link class="nav-link active" to={"/About"}><b style={{color:"white"}}>About</b></Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link class="nav-link active" to={"/Products"}><b style={{color:"white"}}>Products</b></Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link class="nav-link active" to={"/Contact"}><b style={{color:"white"}}>Contact</b></Link>
                            </li>
                        </ul>
                </div>
                </div>
            </nav>
         </div> 

    </>
  )
}

export default Navbar;

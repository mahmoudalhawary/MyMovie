import React from 'react'
import "./Navbar.css";
import { NavLink, Navigate } from 'react-router-dom';



export default function Navbar(props) {

function logout(){
    localStorage.removeItem('token');
    Navigate("/signin")
}

    return (
        < >

            <nav className="navbar navbar-expand-lg navbar-light    nav   mb-2 px-4">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-light" to="/about"> <h3>HBO 
                    </h3>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       
                       {!props.auth? 
                       
                    
                            <>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link text-light " to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/tv">Tv Show</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/people">People     </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/about">Apout</NavLink>
                            </li>
                             

                        </ul>
                        <ul className="navbar-nav   mb-2 mb-lg-0">

                            {/* <li className="nav-icon">
                                <NavLink className="nav-link text-light  " to="/" onClick={() => } ><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-highlights" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8 5v1H4.5a.5.5 0 0 0-.093.009A7 7 0 0 1 3.1 13zm0-1H2.255a7 7 0 0 1-.581-1H8zm-6.71-2a7 7 0 0 1-.22-1H8v1zM1 8q0-.51.07-1H8v1zm.29-2q.155-.519.384-1H8v1zm.965-2q.377-.54.846-1H8v1zm2.137-2A6.97 6.97 0 0 1 8 1v1z" />
                                </svg>
                                </NavLink>
                            </li> */}   
                            <li className="nav-item">
                                <NavLink className="nav-link text-light  "onClick={logout}  ><h5>Logout</h5></NavLink>
                            </li>

                        </ul>
                        
                        
                        </>:  <ul className="navbar-nav   mb-2 mb-lg-0">

  
<li className="nav-item">
    <NavLink className="nav-link text-light  " to="/SignUp"  ><h5>SignUp</h5></NavLink>
</li>
<li className="nav-item">
    <NavLink className="nav-link text-light  " to="/SignIn"  ><h5>SignIn</h5></NavLink>
</li>

</ul>

                    
                    }
                        




                    </div>
                </div>
            </nav>

        </ >
    )
}

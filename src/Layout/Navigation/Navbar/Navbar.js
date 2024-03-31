import React from "react";

import './Navbar.css';

import NavItems from "./NavItems/NavItems";


class Navbar extends React.Component{

    render(){
        
        return(
              
            <header className="navbar">

                <nav> 

                    <NavItems/>
              </nav>
            </header>

        )
    }
}

export default Navbar;
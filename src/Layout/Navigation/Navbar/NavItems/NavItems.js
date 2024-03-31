import React from "react";

import NavItem from "../../NavItem/NavItem";

import './NavItems.css';

class NavItems  extends React.Component{

    render(){

        return(

<ul className="nav-items">

    <NavItem  link="/"> Home </NavItem>
    <NavItem  link="/"> CheckOut </NavItem>

</ul>
        )
    }
}


export default NavItems;
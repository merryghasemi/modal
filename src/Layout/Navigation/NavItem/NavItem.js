import React from "react";
import './NavItem.css';


class NavItem extends React.Component{

    render(){

        return(
            <li className="nav-item">

                <a href={this.props.link}>{this.props.children}</a>
            </li>

        )
    }
}

export default NavItem;
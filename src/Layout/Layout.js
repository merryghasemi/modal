import React from "react";

import Wrapper from './../HOC/Wrapper';

import Shopping from './../Components/Shopping/Shopping';

import './Layout.css';
import Navbar from "./Navigation/Navbar/Navbar";


class Layout extends React.Component{


    render(){

        return(


            <Wrapper>
                  <Navbar/>

                  <Shopping/>

                  {this.props.children}

            </Wrapper>

        )
    }
}

export default Layout;
import React from "react";

import './Modal.css';

class Modal extends React.Component{


    render(){

        return(
          <div
          
          style={{

              opacity: this.props.show ? "1" : "0" , 

          }}
          
          className="modal">{this.props.children} </div>
        )
    }
}


export default Modal;



import React from "react";


import Wrapper from "../../HOC/Wrapper";

import Button from "../../UI/Button/Button";



const Order = (props) => {
  const order_summery = Object.keys(props.products).map((item) => {
    return (
      <li>
        {item}:{props.products[item]}
      </li>
    );
  });

  return (
    <Wrapper>
      <h3> Order_List </h3>
       <h4>TotalList: {props.totalPrice}</h4>
      <ul> {order_summery} </ul>

      <Button  btnType="danger" click={props.cancle} >
        Cancle 
      </Button>
      <Button  btnType="success" click={props.contiue}>
        Checkout 
      </Button>
    </Wrapper>
  );
};

export default Order;

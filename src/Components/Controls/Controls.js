import React from "react";

import Builder from "./Builder/Builder";
import "./Controls.css";

const products = [
  {
    title: "product1",
    type: "product1",
  },

  {
    title: "product2",
    type: "product2",
  },

  {
    title: "product3",
    type: "product3",
  },

  {
    title: "product4",
    type: "product4",
  },
];

const Controls = (props) => {
  return (
    <div className="controls">

      
      <div className="products">
        {products.map((item) => {
          return (
            <Builder
              key={item.type}
              title={item.title}
              add={() => props.productAdd(item.type)}
              remove={() => props.productRemove(item.type)}
            />
          );
        })}
      </div>

     <div className="order">
     <button className="order-btn" onClick={props.order}> Order </button>
     </div>
     
    </div>
  );
};

export default Controls;

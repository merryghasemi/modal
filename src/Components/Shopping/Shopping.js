import React from "react";

import Controls from "../Controls/Controls";
import Modal from "../../UI/Modal/Modal";

import Order from "../../Layout/Order/Order";

import Wrapper from "./../../HOC/Wrapper";
import Backdrop from "../../UI/Backdrop/Backdrop";

import axios from "axios";

import "./Shopping.css";
const prices = {
  product1: 65,
  product2: 99,
  product3: 88,
  product4: 33,
};

class Shopping extends React.Component {
  state = {
    products: {
      product1: 0,
      product3: 0,
      product4: 0,
      product2: 0,
    },
    totalPrice: 0,
    order: false,
  };




  addProductHandler = (type) => {
    const prevCount = this.state.products[type];
    let updatedCount = prevCount + 1;
    const updatedProduct = { ...this.state.products };
    updatedProduct[type] = updatedCount;
    // price
    const priceAdd = prices[type];
    const prevPrice = this.state.totalPrice;
    const updatePrice = prevPrice + priceAdd;

    this.setState({
      totalPrice: updatePrice,
      products: updatedProduct,
    });
  };
  removeProductHandler = (type) => {
    const prevCount = this.state.products[type];
    let updatedCount = prevCount - 1;
    const updatedProduct = { ...this.state.products };
    updatedProduct[type] = updatedCount;
    // price
    const priceAdd = prices[type];
    const prevPrice = this.state.totalPrice;
    const updatePrice = prevPrice - priceAdd;

    this.setState({
      totalPrice: updatePrice,
      products: updatedProduct,
    });
  };

  openModalHandler = () => {
    this.setState({ order: true });
  };

  closeModalHandler = ()=>{

    this.setState({order:false})
  }

  orderContiueHandler=()=>{

    alert('contiue')
  }

  orderCancleHandler=()=>{
    alert('cancle')
  }

  render() {
    return (
      <Wrapper>
        <Backdrop  show={this.state.order} 
        
        close={this.closeModalHandler}
        />
        <Modal show={this.state.order}>
          <Order products={this.state.products} 
          totalPrice={this.state.totalPrice}

          contiue={this.orderContiueHandler}

          cancle={this.orderCancleHandler}
          />
        </Modal>
       
        <Controls
          productAdd={this.addProductHandler}
          productRemove={this.removeProductHandler}
          order={this.openModalHandler}
        />
      </Wrapper>
    );
  }
}

export default Shopping;

import React from "react";
import Calendar from 'react-calendar'

const orderBox = {
    backgroundColor: "white",
    padding: "20px",
    width: "400px",
    height: "420px",
    
  };
   

const OrderPopup = (props) => {

  return <div style={orderBox} className="order-popup">
    <form>
    <button className="close-popup" onClick={() => props.onClose()}>X</button>
    <h1 className="order">Sipariş Ver</h1>
    
    <hr/>


    </form>
  </div>
};

export {OrderPopup}
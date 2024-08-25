import React from 'react'
import CartItems from '../components/CartItems/CartItems'
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";


const Cart = () => {
  const [cookies] = useCookies(["auth-token"]);

  if (!cookies["auth-token"]) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <CartItems/>
    </div>
  )
}

export default Cart

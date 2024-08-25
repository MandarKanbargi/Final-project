import {useContext} from 'react'
import qrcode from '../components/Assets/qrcode.png'
import { ShopContext } from '../Context/ShopContext'
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Payment = () => {
const {getTotalCartItems}= useContext(ShopContext);
const [cookies] = useCookies(["auth-token"]);

if (!cookies["auth-token"]) {
    return <Navigate to="/login" />;
  }
else if(getTotalCartItems() === 0) {
  return <Navigate to="/cart" />
}
  return (
    <div style={{display:"flex", justifyContent:"center", marginBlock:"4rem"}} className='payment'>
      <img src={qrcode} alt="payment"/>
    </div>
  )
}

export default Payment

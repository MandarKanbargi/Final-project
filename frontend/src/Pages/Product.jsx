import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/Productdisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productId}= useParams();                                   //to fetch product id
  const product = all_product.find((e)=> e.id === Number(productId))   //pid is converted in no.
  const [cookies] = useCookies(["auth-token"]);

  if (!cookies["auth-token"]) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product

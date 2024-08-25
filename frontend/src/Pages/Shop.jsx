import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import Newsletter from '../components/Newsletter/Newsletter'
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Shop = () => {
  const [cookies] = useCookies(["auth-token"]);

  if (!cookies["auth-token"]) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers />
      <NewCollections />
      <Newsletter />
    </div>
  )
}

export default Shop

import React from 'react'
import { RealtimeData }  from '../components/ProductsTable'
import { Link } from 'react-router-dom'
import '../App.css'
import { IoIosArrowForward } from "react-icons/io"

const Products = () => {
  return (
    <div className="main">
      <h1>PRODUCTS</h1>
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      <br/><br/>
      <RealtimeData/>
      <br/><br/>
      <p style={{textAlign: "right"}}><Link to='/addprod' style={{fontWeight: "bold", textDecoration: "none"}}>ADD A PRODUCT <IoIosArrowForward/></Link></p>
    </div>
  )
}

export default Products

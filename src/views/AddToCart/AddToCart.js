import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import productData from './../../data.json'
import { useParams } from 'react-router-dom';
import './AddToCart.css'


function AddToCart() {
  const {id} = useParams()
 
 const [product,setProduct]=useState(productData.products[0])

 useEffect(()=>{
  productData.products.forEach((prodObj)=>{
    if(prodObj.id === parseInt (id)){
      setProduct(prodObj)
    }
  })
 },[id])

 console.log(product)
  return (
    <div>
        <Navbar/>
        <div className='container-add-to-cart'>
      <div className=' d-flex justify-content-center'>

     
        <div className='image-container'>
  
        <img src={product.images[0]}/> <br/>
        <div className='d-flex justify-content-between'>
        {product.images.slice(0, 4).map((image, index) => (
        <img key={index} src={image} className='related-images-container ' alt={`Related Image ${index}`} />
      ))}
      </div>
        
        </div>
        <div className='product-details-container'>
        <p className='fw-bold fs-3'>{product.title}</p>
        <p className='fs-4'>{product.description}</p>
        <div className='d-flex fs-2'>
        <p><i class="bi bi-currency-rupee"></i>{product.price}</p>
        <p className='dis-count-text'>{product.discountPercentage}% off</p>
        </div>
        <p className='text-success'>Stock : {product.stock}</p>
        <p className='text'>Brand : {product.brand}</p>
        <p className='text-danger'>Category : {product.category}</p>
        
        </div>
      </div>

    </div>
    </div>
  )
}

export default AddToCart
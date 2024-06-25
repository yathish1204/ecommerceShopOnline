import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

export const ListProduct = () => {

    const [allProducts, setAllProducts] = useState([]);

    const fetchInfo = async()=>{
        await fetch('http://localhost:4000/allproducts')
        .then((res)=>res.json())
        .then((data)=>{setAllProducts(data)});
    }

    useEffect(() => {
      fetchInfo();
    }, [])

    const removeProduct = async(id)=>{
        await fetch('http://localhost:4000/removeproduct',{
            method:"POST",
            headers:{
                Accept:"application/json",
                'Content-Type':"application/json",
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }
  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproducts-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product,i)=>{
            return <>
            <div key={i} className='listproducts-format-main listproduct-format'>
                <img className='listproduct-product-icon' src={product.image} alt="product image" />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img src={cross_icon} onClick={()=>removeProduct(product.id)} className='listproduct-remove-icon' alt="remove icon" />
            </div>
            <hr />
            </>
        })}
      </div>
    </div>
  )
}

export default ListProduct

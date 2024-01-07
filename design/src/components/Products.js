import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {popularProducts} from './Data'
import Product from './Product'
import axios from 'axios'

const Container=styled.div`
   display: flex;
   padding: 20px;
   flex-wrap: wrap;
   justify-content: space-between;
`

const Products =  ({category,filters,sort}) => {
  
  const [products,setProducts]=useState([]);
  const [filteredProducts,setFilteredProducts]=useState([]);
   useEffect( () => {
    const getData=async ()=>{
      try{
       const res=await axios.get(category ? `http://localhost:5000/api/products?${category}` : "http://localhost:5000/api/products");
        setProducts(res.data);
      }catch(err){
        console.log(err);
      }
    }
    getData()
   }, [category]);

   useEffect(()=>{
    category && setFilteredProducts(products.filter((items)=> Object.entries(filters).every(([key,val])=>
      items[key].includes(val)
    )))
    
 },[products,filters,category])

   useEffect(()=>{
    if(sort==='newest'){
  
  setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
       );
        
      }else if(sort==='asc'){
        setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
      }
      else{
        setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
      }
   },[sort])
  
  
  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products.slice(0,8)
            .map((item) => <Product item={item} key={item.id} />)}
  </Container>
  )
}

export default Products

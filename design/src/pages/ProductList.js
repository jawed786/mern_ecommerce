import Navbar from '../components/Navbar'
import React from 'react'
import Announcement from '../components/Announcement'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
const Container = styled.div`

`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  
`

const FilterText = styled.span`
 font-size: 20px;
 font-weight: 600;
 width: 40%;
 
`

const Filter = styled.div`
    width: 25%;
    margin: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
`
const Title=styled.h1`
    margin: 0px 20px;
`
const Select = styled.select`
   width: 35%;
   border-radius: 5px;
   font-size: 15px;
   font-weight: 600;
   padding: 5px;
   display: flex;
   align-items: center;
   justify-content: center;

   width: fit-content;
   height: 40px;
   margin: 3px;
`
const Option = styled.option`
  font-size: 0px 15px;
`
const ProductList = () => {
  const location=useLocation();
  const category=location.pathname.split("/")[2];
  const [filters,setFilters]=useState({});
  const [sort,setSort]=useState("Newest");
  const handleFilters=(e)=>{
    setFilters({...filters,[e.target.name]:e.target.value})
  }

  return (
    <Container>
       <Announcement />
      <Navbar />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>red</Option>
            <Option>blue</Option>

          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled >Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>XL</Option>
            <Option>XXL</Option>

          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products</FilterText>
          <Select onChange={(e)=> setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price(asc)</Option>
            <Option value="desc">Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products  category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container=styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info=styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`
const Button=styled.button`
   padding: 3px;
   font-weight: 600;
`
const Title=styled.h1`
   color: white;
`

const CategoryItem = (props) => {
  return (
    <Container>
      <Image src={props.item.img}/>
      <Link to={`/products/${props.item.category}`}>
      <Info>
        <Title>{props.item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem

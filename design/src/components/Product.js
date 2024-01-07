import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Info=styled.div`
  opacity: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 1.5 ease;
  
`
const Container=styled.div`
  display: flex;
  min-width: 300px;
  height: 350px;
  flex:1;
  margin: 3px;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color:whitesmoke;
  border-radius: 2%;
  &:hover ${Info}{
      opacity: 1;
  }
 `
const Image=styled.img`
  height: 75%;
  
`
const Circle=styled.div`
opacity: 0.2;
height:200px;
width: 200px;
border-radius: 50%;
background-color: white;
position: absolute;

`
const Icon=styled.div`
 height: 40px;
 width: 40px;
 border-radius: 50%;
 background-color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 5px;
 transition: 0.5s ease;
 &:hover{
    transform: scale(1.1);
  }
  cursor: pointer;
`

const Product = (props) => {
  console.log(props)
  return (
    <Container>
        <Circle></Circle>
        <Image src={props.item.img}/>
        <Info>
               <Icon>
                  <ShoppingCartOutlinedIcon/>
               </Icon>
               <Link to={`/product/${props.item._id}`}>
                  <Icon>
                      <SearchOutlinedIcon/>
                  </Icon>
               </Link>
               <Icon>
                   <FavoriteBorderOutlinedIcon/>
               </Icon>
        </Info>
       
    </Container>
  )
}

export default Product

import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container=styled.div`

`
const Wrapper=styled.div`
      padding: 20px;
`
const Title=styled.h1`
    text-align: center;
`
const Top=styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
`
const TopTexts=styled.div`
      display: flex;
      
`
const TopText=styled.span`
      margin: 0px 5px;
      text-decoration: underline;
`
const TopButton=styled.button`
      padding: 10px;
      font-weight: 600;
      cursor: pointer;
      border:${(props)=>props.type==='filled' && 'none'};
      background-color: ${(props)=>props.type==='filled' ? 'black' : "transparent"};
      color:${(props)=>props.type==="filled" && "white"};
`
const Bottom=styled.div`
    display: flex;
    justify-content: space-between;
`
const Info=styled.div`
      flex: 3;
`
const Product=styled.div`
    display: flex;

`
const ProductDetails=styled.div`
      display: flex;
      flex: 2;
`
const Image=styled.img`
       width: 200px;
`
const Details=styled.div`
      display: flex;
      flex-direction: column;
      padding: 20px;
      justify-content: space-around;
`
const ProductName=styled.span`

`
const ProductId=styled.span`

`
const ProductColor=styled.div`
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: ${(props)=>props.color};
`
const ProductSize=styled.span`

`
const PriceDetails=styled.div`
      flex: 1;
`
const ProductAmountContainer=styled.div`
      display: flex;
      align-items: center;
      margin: 10px;
`
const ProductAmount=styled.div`
      font-size: 24px;
      margin: 5px;
`
const ProductPrice=styled.div`

`
const Hr=styled.hr`
      background-color: #eeee;
      border: none;
      height: 1px;
`

const Summary=styled.div`
      flex: 1;
      border: 1px solid lightgray;
      padding: 20px;
      border-radius: 10px;
      height: 50vh;
`

const SummaryTitle=styled.h1`
      font-weight: 200;
`
const SummaryItem=styled.div`
       margin: 30px 0px;
       display: flex;
       justify-content: space-between;
       font-weight: ${(props)=> props.type==='total' && '600'};
       font-size: ${(props)=> props.type==='total' && '24px'};
`
const SummaryItemText=styled.span`

`
const SummaryItemPrice=styled.span`

`
const Button=styled.button`
     width: 100%;
     padding: 10px;
     background-color: black;
     color: white;
`


const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
           <TopButton>CONTINUE SHOPPING</TopButton>
           <TopTexts>
             <TopText>Shopping bag(2)</TopText>
             <TopText>your wishlist(0)</TopText>
           </TopTexts>
           <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetails>
                        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                        <Details>
                            <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                            <ProductId><b>Id:</b> 973892287</ProductId>
                            <ProductColor color='black'/>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                      <ProductAmountContainer>
                        <AddIcon/>
                        <ProductAmount>2</ProductAmount>
                        <RemoveIcon/>
                      </ProductAmountContainer>
                      <ProductPrice>RS:800</ProductPrice>
                    </PriceDetails>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetails>
                        <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                        <Details>
                            <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                            <ProductId><b>Id:</b> 973892287</ProductId>
                            <ProductColor color='black'/>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                      <ProductAmountContainer>
                        <AddIcon/>
                        <ProductAmount>2</ProductAmount>
                        <RemoveIcon/>
                      </ProductAmountContainer>
                      <ProductPrice>RS:600</ProductPrice>
                    </PriceDetails>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                   <SummaryItemText>SubTotal</SummaryItemText>
                   <SummaryItemPrice>Rs: 800</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                   <SummaryItemText>Estimated Shipping</SummaryItemText>
                   <SummaryItemPrice>Rs: 50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                   <SummaryItemText>Shipping Discount</SummaryItemText>
                   <SummaryItemPrice>Rs: -40</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                   <SummaryItemText>Total</SummaryItemText>
                   <SummaryItemPrice>Rs: 810</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart

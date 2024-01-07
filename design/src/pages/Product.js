import React, { useState ,useEffect} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useLocation } from 'react-router-dom'
import { publicRequest }  from '../requestMethod.js'
import { useDispatch } from 'react-redux'
import { addProducts } from '../redux/cartRedux.js'
const Container = styled.div`
    padding: 0;
    margin: 0;
    
`
const Wrapper = styled.div`
      display: flex;
      padding: 30px;
`
const ImageContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
   width: 100%;
   height: 90vh;
   object-fit: cover;
`
const InfoContainer = styled.div`
   flex: 1;
   padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-size: 30px;
    font-weight: 100;
`
const FilterContainer = styled.div`
     display: flex;
     justify-content: space-between;
     width: 50%;
     margin: 30px 0px;
      
`
const Filter = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;

`
const FilterTitle = styled.span`
        margin: 3px;
        font-size: 20px;
        font-weight: 200;
`
const FilterColor = styled.div`
     height: 20px;
     width: 20px;
     border-radius: 50%;
     background-color: ${(props)=>props.color};
     margin:0px 4px;
`
const FilterSize = styled.select`
    margin: 0px 5px;
    padding: 5px;
` 
  
const FilterSizeOption = styled.option`
      
`
const AddContainer=styled.div`
     width: 50%;
     display: flex;
     align-items: center;
     justify-content: space-between;
`
const AmountContainer=styled.div`
      display: flex;
      align-items: center;
      justify-content: center;

`
const Amount=styled.div`
    height: 30px;
    width: 30px;
    border-radius: 30%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    
`
const Button=styled.button`
     font-size: 20px;
     font-weight: 200;
     padding: 7px;
     cursor: pointer;
     border-radius: 5px;
`

const Product = () => {
    const location=useLocation();
    const id=location.pathname.split("/")[2];
    const [product,setProduct]=useState({}); 
    const [amount,setAmount]=useState(1);
    const [size,setSize]=useState("");  
    const [color,setColor]=useState("");  
    const dispatch=useDispatch()
   const hanadleCartClick=()=>{
    dispatch(addProducts({product,amount}))
   }

    const handleClick =(type) =>{
       if(type=="dec"){
          amount>=1 && setAmount(amount-1);
       }else{
           setAmount(amount+1)
       }
    }
     
     useEffect(() => {
       const getProduct= async ()=>{
        try{
            
            const res= await publicRequest.get("/products/find/"+id);
            setProduct(res.data);
            console.log(res.data)
        }catch{
               
        }
       }
       getProduct();
       
   }, [id]);

    
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>
                        {product.title}
                    </Title>
                    <Desc>
                        {product.desc}
                    </Desc>
                    <Price>
                        Rs:- {product.price}
                    </Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle onClick={(e)=>{setColor(e.target.value)}}>Color </FilterTitle>
                            {product.color?.map((c) => (
                                <FilterColor color={c} key={c}/>
                                ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size </FilterTitle>
                            <FilterSize onChange={(e)=>{setSize(e.target.value)}}>
                            {product.size?.map((size) => (
                                <FilterSizeOption>{size}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveCircleOutlineIcon onClick={()=> handleClick("dec")} />
                            <Amount>{amount}</Amount>
                            <AddCircleOutlineIcon onClick={()=> handleClick("asc")}/>
                        </AmountContainer>
                        <Button onClick={hanadleCartClick}>Add to cart</Button>
                    </AddContainer>
                    
                </InfoContainer>

            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product

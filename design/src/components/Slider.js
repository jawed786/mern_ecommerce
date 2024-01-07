
import React ,{useState}from 'react'
import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import {sliderItems} from './Data'

const Container=styled.div`
height: 100vh;
width: 100%;
background-color: aquamarine;
display: flex;
position: relative;
overflow: hidden;

`
const Arrow=styled.div`
   height:50px ;
   width: 50px;
   border-radius: 50px;
   background-color: yellowgreen;
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 0px;
   bottom: 0px;
   left: ${(props)=>props.direction==='left' && "10px"};
   right:${(props)=>props.direction==='right' && "10px"};
   margin: auto;
   cursor: pointer;
   z-index: 2;
`
const Slide=styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props)=> props.bg};
`
const Imgcontainer=styled.div`
 width:50%;
`
const Infocontainer=styled.div`
    width: 50%;
`
const Wrapper=styled.div`
height: 100%;
background-color: lightgrey;
display: flex;
transform: translateX(${(props)=> props.slideIndex*-100}vw);
transition: all 1.5s ease;
`
const Image=styled.img`
height: 100vh;

`
const Title=styled.h1`
 font-size: 70px;
`
const Desc=styled.p`
  width: 50%;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;

`

const Button=styled.button`
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
`
const Slider = () => {
  const [slideIndex,setslideIndex]=useState(0);
  
  const handleclick=(direction)=>{
    if(direction==='left'){
      setslideIndex(slideIndex>0 ? slideIndex-1:2)
    }
    else{
      setslideIndex(slideIndex<2 ? slideIndex+1:0)
    }
  }

  return (
    <Container>
      <Arrow direction='left' onClick={()=>handleclick('left')}>
        <ArrowLeftIcon/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}> 
      {sliderItems.map((items)=>
        (<Slide bg={items.bg} key={items.id}>
           <Imgcontainer>
              <Image src={items.img}/>
           </Imgcontainer>
           <Infocontainer>
             <Title> {items.title} </Title>
             <Desc> {items.desc} </Desc>
             <Button> shop now</Button>
           </Infocontainer>
        </Slide>
            ))}
      </Wrapper>
      <Arrow direction='right' onClick={()=>handleclick('right')}>
        <ArrowRightIcon/>
      </Arrow>
    </Container>
  )
}

export default Slider

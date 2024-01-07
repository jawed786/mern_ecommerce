import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  #fcf5f5;
    flex-direction: column;
`
const Title=styled.h1`
    font-size: 70px;
    margin: 20px;
   
`
const Desc=styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer=styled.div`
     height: 40px;
     width: 50%;
     background-color: white;
     display: flex;
     justify-content: space-between;
     border: 1px solid lightgray;
`
const Input=styled.input`
  border: none;
  flex: 8;
  padding-left: 10px;
`
const Button=styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>News letter</Title>
        <Desc>get timely updates from your favourates products</Desc>
        <InputContainer>
             <Input placeholder='your email'/>
             <Button>
                  <SendIcon/>
             </Button>

        </InputContainer>
    </Container>
  )
}

export default Newsletter

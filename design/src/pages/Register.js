import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   height: 100vh;
   width: 100vw;
   background:linear-gradient( rgba(255,255,255,0.5),
   rgba(255,255,255,0.5)) ,
   url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center ;
   display: flex;
   justify-content: center;
   align-items: center;
 `
const Wrapper = styled.div`
     width: 40%;
     background-color: white;
     padding: 20px;
`
const Form=styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width:40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Title = styled.div`
     font-size: 24px;
     font-weight: 400;
`
const Agrrement = styled.div`
   font-size: 15px;
   margin: 20px 0px;
`
const Button=styled.button`
  width: 40%;
  background-color: teal;
  padding: 15px 20px;
  color: white;
  font-size: 20px;
`


const Register = () => {
    return (
        <Container>
            <Wrapper>
            <Title>Creat an account</Title>
                <Form>
                    
                    <Input placeholder="First name" />
                    <Input placeholder="last name" />
                    <Input placeholder="UserName" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agrrement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agrrement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register

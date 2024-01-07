import React from 'react'
import styled from 'styled-components'



const Container=styled.div`
   height: 100vh;
   width: 100vw;
   background:linear-gradient( rgba(255,255,255,0.5),
   rgba(255,255,255,0.5)) ,
   
  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center ;
  background-size:cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper=styled.div`
    width: 25%;
    background-color: white;
    padding: 20px;
`
const Title=styled.div`

`
const Form=styled.div`
     display: flex;
     flex-direction: column;
`
const Input=styled.input`
     flex: 1;
     min-width: 40%;
     padding: 10px;
     margin: 10px 0px;
`
const Button=styled.button`
      width: 40%;
      padding: 15px 20px;
      color: white;
      background-color: teal;
      cursor: pointer;
      margin-bottom: 10px;

`
const Link=styled.a`
   margin: 5px 0px;
   font-size: 12px;
   text-decoration: underline;
   cursor: pointer;
` 
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" />
                    <Input placeholder="password" />
                    <Button>LOGIN IN</Button>
                    <Link>FORGOT PASSWORD</Link>
                    <Link>CREATE AN ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login

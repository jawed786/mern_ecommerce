import styled from 'styled-components'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Left = styled.div`
flex: 1;
display: flex;

align-items: center;

margin: 1px;
color: whitesmoke;

`
const Right = styled.div`
flex: 1;
display: flex;
justify-content:flex-end;
align-items: center;
margin: 1px;
color: whitesmoke;
`
const Center = styled.div`
 flex: 1;
 display: flex;
justify-content: center;
align-items: center;
margin: 1px;
color: whitesmoke;
`

const Container = styled.div`
background-color: gray;
height: 60px;
display:flex;
align-items:center;
padding-left:10px;
`
const Wrapper = styled.div`
height: 30px;
display: flex;
align-items: center;
width: 100%;
`

const Searchcontainer=styled.div`
border: 0px solid gray;
display: flex;
justify-content: center;
align-items: center;
margin-left: 5px;
padding: 3px;
margin:0px;
`
const Language=styled.div`
`
const Input=styled.input`
 border: none;
`
const Menuitem=styled.div`
cursor: pointer;
margin: 15px;
`
const Navbar = () => {
    const quantity=useSelector((state)=>{
        return state.cart.quantity
    })
    return (
        <Container>
            <Wrapper>
                <Left> 
                    <Language>
                        EN
                       
                    </Language>
                    
                    <Searchcontainer>
                        <Input/>
                        <SearchIcon/>
                    </Searchcontainer>
                </Left>
                <Center><h1>
                    sajid cloths
                </h1>

                </Center>
                <Right>
                    <Menuitem> REGISTER</Menuitem>
                    <Menuitem>SIGN IN</Menuitem>
                    <Menuitem> 
                     <Badge badgeContent={quantity} color='primary'>
                          <ShoppingCartOutlinedIcon/>
                     </Badge>
                    </Menuitem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar

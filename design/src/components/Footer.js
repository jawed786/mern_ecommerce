import React from 'react'
import styled      from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Container=styled.div`
  display: flex;


`
const Left=styled.div`
  flex: 1;
  
`
const Logo=styled.h1`
   margin-left: 50px;
`
const Desc=styled.p`
   margin-left: 20px;
   font-size: 17px;
   font-weight: 350;
`
const SocialContaier=styled.div`
   display: flex;
`
const SocialIcon=styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #${(props)=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px ;
`
const Center=styled.div`
    flex: 1;

`

const Title=styled.h3`
    margin: 30px;
`
const List=styled.ul`
    display: flex;
    flex-wrap: wrap;
`
const ListItem=styled.li`
   width: 50%;
   list-style: none;
   margin-bottom: 10px;
`
const Right=styled.div`
  flex: 1;
`
const ContactItem=styled.div`
     margin: 20px;
     display: flex;
    
`
const Payment=styled.img`
  width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
           <Logo>SAJID CLOTHS</Logo>
           <Desc>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.
           </Desc>
           <SocialContaier>
               <SocialIcon color="3B5999">
                   <FacebookIcon/>
               </SocialIcon>
               <SocialIcon color="E4405F">
                   <InstagramIcon/>
               </SocialIcon>
               <SocialIcon color="55ACEE">
                   <PinterestIcon/>
               </SocialIcon>
               <SocialIcon color="E60023">
                   <TwitterIcon/>
               </SocialIcon>
           </SocialContaier>
      </Left>
      <Center>
         <Title>Useful links</Title>
         <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accesories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>wishList</ListItem>
            <ListItem>Terms</ListItem>
         </List>
      </Center>
      <Right>
           <Title>Contact</Title>
           <ContactItem>
               <RoomIcon style={{marginRight:'10px'}}/> badhai tola,chhatauni,motihari 845401
           </ContactItem>
           <ContactItem>
              <PhoneIcon style={{marginRight:'10px'}}/> +91 6204264758
           </ContactItem>
           <ContactItem>
               <EmailIcon style={{marginRight:'10px'}}/>  mdjawedalam66@gmail.com
           </ContactItem>
           <ContactItem>
               <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
           </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer

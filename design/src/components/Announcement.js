import styled from 'styled-components'

const Container=styled.div`
background-color: yellow;
width: 100vw;
display: flex;
justify-content: center;
`
const Announcement = () => {

  return (
    <Container>
     Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement

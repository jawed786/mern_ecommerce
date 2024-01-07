import {categories} from './Data'
import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'

const Container=styled.div`
   display: flex;
`

const Categories = () => {
  return (
    <Container>
      {categories.map( item=> <CategoryItem item={item} key={item.id}/>
       )}
    </Container>
  )
}

export default Categories

import React from 'react'
import styled from 'styled-components'
import Category from '../Category/Category'

export default function Filter() {
  return (
    <Container>
      <Title className="">Categories</Title>
      <div role='separator' className='separator'></div>
      <Categories>

      </Categories>
    </Container>
  )
}


const Container = styled.div`
    border-radius:1rem;
    width: 25%;
    height: 100%;
    min-height: 100%;
    /* margin: 1rem; */
    position: sticky;
    top: 0;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
    @media only screen and (max-width: 640px){
      display: none;
    }

    .separator{
      height: 1px;
      width: calc(100% - 1.5rem);
      margin: 0.25rem 0.75rem;
      background-color: rgb(209, 214, 224);
    }

`
const Title = styled.div`
  border-radius: 1rem;
    padding: 1rem;
    position: sticky;
    background-color: white;
    top: 0;
    font-size: 24px;
    font-weight: 500;
    &::after{
    content: '';
    display: block;
    margin-top: 10px;
    width: 50px;
    height: 3px;
    background-color: #8e2dec;
}
`
const Categories = styled.div`
`


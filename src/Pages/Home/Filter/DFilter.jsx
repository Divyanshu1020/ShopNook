import React, { useState } from 'react';
import styled from 'styled-components';
import CategoriesTitle from './Categories title/CategoriesTitle';

export default function Filter() {
  const [categories] = useState([
    {
      id: "Cat1",
      title: "Products",
      options: ["Laptops", "Smartphones", "Earbuds/Headphones", "SmartWatch", "PCs", "TV", "Monitor", "Console"]
    },
    {
      id: "Cat4",
      title: "Brands",
      options: ["Apple", "Motorola", "BLU", "OnePlus"]
    },
    // {
    //   id: "Cat2",
    //   title: "Prices",
    //   options: ["₹ 10000 to ₹ 20000", "₹ 20000 to ₹ 40000", "₹ 40000 to ₹ 70000", "₹ 70000 to ₹ 100000", "₹ 150000 to ₹ 200000", "₹ 200000   & above"]
    // },
    // {
    //   id: "Cat3",
    //   title: "Condition",
    //   options: ["New", "Old"]
    // },

  ])
  return (
    <Container>
      <Title className="">Categories</Title>
      <div role='separator' className='separator'></div>
      <Categories >
        <CategoriesTitle
          title={categories[0].title}
          options={categories[0].options}
        />
        <CategoriesTitle
          title={categories[1].title}
          options={categories[1].options}
        />
        {/* <CategoriesTitle
          title={categories[2].title}
          options={categories[2].options}
        />
        <CategoriesTitle
          title={categories[3].title}
          options={categories[3].options}
        /> */}
      </Categories>
    </Container>
  )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius:0.7rem;
    min-width: 200px;
    width: 25%;
    height: 100%;
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
  border-radius: 0.7rem;
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
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
width: 100%;
overflow: auto;
&::-webkit-scrollbar{
      display: none;
    }
  
`



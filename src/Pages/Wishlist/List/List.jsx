import React from 'react'
import styled from 'styled-components'
import ListComponent from './ListComponent/ListComponent'
import { useWishlist } from '../../../context/wishlist.context'

export default function List() {
  const { wishlist, setWishlist } = useWishlist();

  const deleteWishlistItems = (index) => {
    const updateWishlist = [...wishlist];
    updateWishlist.splice(index, 1);
    setWishlist(updateWishlist)
  }
  return (
    <Background >
      <Container>
        <h1>Wishlist</h1>
        <Container>
          {wishlist.map((product, index) => (
            <ListComponent
              key={product._id}
              id={product._id}
              index={index}
              title={product.title}
              description={product.description}
              price={product.price}
              thumbnail={product.thumbnail}
              deleteWishlistItems={deleteWishlistItems}
            />
          ))}
        </Container>
      </Container>
    </Background>
  )
}

const Container = styled.div`
    border-radius: 0.5rem;
    margin-top: 1rem;      
`

const Background = styled.div`
    width: calc(100% - 2rem);
    margin:  auto;
    background-color : white;
    border-radius: 0.7rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px;
    
    padding: 3rem 4rem;
    @media only screen and (max-width: 768px){
        padding: 1.5rem 2rem;
    }
    @media only screen and (max-width: 640px){
        width: calc(100% - 1rem);
    }
`
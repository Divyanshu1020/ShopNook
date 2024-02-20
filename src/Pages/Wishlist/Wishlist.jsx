import React from 'react'
import { useWishlist } from '../../context/wishlist.context'
import List from './List/List';
import Empty from './Empty/Empty';

export default function Wishlist() {
    const { wishlist} = useWishlist();
    return wishlist.length === 0 ?  <Empty/> : <List/> 
}

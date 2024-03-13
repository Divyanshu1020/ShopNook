import React from 'react';

import axios from 'axios';
import { useUser } from '../context/user.context';

export default function useApi() {

  const { user } = useUser()


  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  //* Cart APIs
  const cartUpdateApi = async (data) => {
    if (data) {
      try {
        const response = await axios.post("http://localhost:8000/api/v1/users/cart", data, { withCredentials: true });
        console.log(response);
      } catch (err) {
        console.error("Error while updating cart:", err);// unnecessary
      }
    }
  }
  const fatchCartData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/users/cart", { withCredentials: true })
      return response.data.data[0].cart
    } catch (error) {
      console.log("Error is produced when fetching product", error);
      return null
    }
  }
  const deleteCartItem = async (id) => {
    if (id) {
      try {
        const response = await axios.delete("http://localhost:8000/api/v1/users/cart", {
          data: { id },
          withCredentials: true
        });
        console.log(response);
      } catch (err) {
        console.error("Error while deleting item from cart:", err);
      }
    }
  }

  //* wishlist APIs
  const getWishlistItems = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/users/wishlist", { withCredentials: true })
      return response.data
    } catch (error) {
      console.log("Error is produced when fetching wish product", error);
      return null
    }
  }
  const addWishlistItem = async (productId) => {

    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/wishlist", { productId }, { withCredentials: true })
      console.log(response.status)
    } catch (error) {
      console.log("Error is produced when adding wish product", error);
      return null
    }

  }
  const removeWishlistItem = async (productId) => {
    try {
      const response = await axios.delete("http://localhost:8000/api/v1/users/wishlist", {
        data: { productId },
        withCredentials: true
      })
      console.log(response.status)
    } catch (error) {
      console.log("Error is produced when removing wish product", error);
      return null
    }
  }
  const debouncedAddWishlistItem = debounce(addWishlistItem, 1000);
  const debouncedRemoveWishlistItem = debounce(removeWishlistItem, 1000);

  //* Product APIs
  const fatchProductData = async (id) => {
    let userId = "";
    if (user) {
      userId = user.userId;
    }
    try {
      const response = await axios.post(`http://localhost:8000/api/v1/products/getProductById/${id}`, {
        userId: userId
      });
      return { data: response.data.data[0] };
    } catch (error) {
      console.log("Error occurred when fetching product data", error);
      return { error: true, code: error.code };
    }
  }


  const fatchAllProducts = async (page, query) => {

    let url = `http://localhost:8000/api/v1/products?page=${page}`

    if (query.products) {
      url += `&category=${query.products}`
    }
    if (query.brands) {
      url += `&brand=${query.brands}`
    }

    console.log(url);


    try {
      const response = await axios.get(
        url,
        { withCredentials: true }
      )
      return response.data.data
    } catch (error) {
      console.log("Error is produced when fetching product", error);
      return null
    }
  }


  return {
    cartUpdateApi,
    fatchProductData,
    fatchCartData,
    fatchAllProducts,
    deleteCartItem,
    getWishlistItems,
    removeWishlistItem,
    debouncedAddWishlistItem,
    debouncedRemoveWishlistItem
  }
}
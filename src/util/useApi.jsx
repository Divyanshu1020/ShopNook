import React from 'react'
import axios from 'axios';


export default function useApi() {

  const cartUpdateApi = async (data) => {
    if (data) {
      try {
        const response = await axios.post("http://localhost:8000/api/v1/users/updateCart", data, { withCredentials: true });
        console.log(response);
      } catch (err) {
        console.error("Error fetching current user:", err);
      }
    }
  }
  const fatchProductData = async (id) => {

    try {
      const response = await axios.get(`http://localhost:8000/api/v1/products/getProductById/${id}`)
      return response.data.data;

    } catch (error) {
      console.log("Error is produced when fetching product", error);
      return null;
    }
  }

  return { cartUpdateApi, fatchProductData }
}
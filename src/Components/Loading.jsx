import React from 'react'
import styled from 'styled-components'

export default function Loading() {
  return (
    <Load><h1>loading...</h1></Load>
  )
}

const Load = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rebeccapurple;
`
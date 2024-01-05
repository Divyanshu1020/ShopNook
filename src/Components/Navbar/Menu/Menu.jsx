import React from 'react'
import styled from 'styled-components'

export default function Menu({setMenuShow}) {
  return (
    <Container>
        <Background onClick={()=>setMenuShow(false)}/>
        <Main_Menu>

        </Main_Menu>
    </Container>
  )
}


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 999;
`
const Background = styled.div`
  background-color: rgba(0, 0 ,0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const Main_Menu = styled.div`
background: white;
  height: 100%;
  width: 340px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transform: translateX(100%);
  animation: cart 0.3s ease forwards ;
  @keyframes cart {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
}
`
// @ts-ignore
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Login() {
    const email  = useRef('');
    const password  = useRef('');
    
    function loginHandler(e){
        e.preventDefault();
        // @ts-ignore
        console.log(email?.current.value, password?.current.value);
    }
    return (
        <Background>
        <form onSubmit={(e)=>{loginHandler(e)}}>
            <Input className='input'>
                <h1 className="input-hader">Login</h1>
                <Input_Container className="input-container">
                    {/* email input */}
                    <Input_Group className="input-group">
                        <input
                            // @ts-ignore
                            ref={email}
                            className='input'
                            type="email"
                            placeholder='Email'
                            
                        />
                        <label className='label'>Email</label>
                    </Input_Group>

                    <Input_Group className="input-group">
                        <input
                            className='input'
                            type="password"
                            placeholder='Password'
                            // @ts-ignore
                            ref={password}
                        />
                        <label className='label'>Email</label>
                    </Input_Group>
                    <button
                        className="sign"
                        onClick={() =>{loginHandler()}}
                        type='submit'
                        // onSubmit={() =>{loginHandler()}}
                        
                    >Login</button>
                    <p className="linkp">Not registered? <Link to={'/signin'}>Creat account</Link></p>
                </Input_Container>
            </Input>
            </form>
        </Background>
    )
}


const Background = styled.div`

    width: 100%;
    max-width: 500px;
    min-height: 550px;
    margin: 50px auto;
    /* border: 1px solid black; */
    /* border-radius: 1rem; */
    /* box-shadow: 0 2px 40px #555; */
    padding: 10px;
    overflow: hidden;

`
const Input = styled.div`
    background-color: white;
`
const Input_Container = styled.div``
const Input_Group = styled.div``

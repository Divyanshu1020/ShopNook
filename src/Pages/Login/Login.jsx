// @ts-ignore
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useUser } from '../../context/user.context';

export default function Login() {
    const [errorMessage, seteErrorMessage] = useState('');
    const [buttonDisable, setButtonDisable] = useState(false);
    const email = useRef('');
    const password = useRef('');
    const navigat = useNavigate();
    const [user, setUser] = useUser();

    async function loginHandler(e) {
        e.preventDefault();
        const em = email?.current.value;
        const pass = password?.current.value;
        console.log(em, pass);
        if(!(em || pass)){
            seteErrorMessage('Please enter a valid email and password');
        }

        setButtonDisable(true);

        try {
            await axios
            .post('http://localhost:5000/api/v1/users/login', {email : em , password : pass})
            .then((response) => {
                setUser({
                    user : response.data.user,
                    JWT : response.data.token,
                })
                setButtonDisable(false)
                console.log(response.data);

            })
            
        } catch (error) {
            console.log(error);

        }
        setButtonDisable(false)

        // @ts-ignore
        
    }
    return (
        <Background>
            <form onSubmit={(e) => { loginHandler(e) }}>
                <Input className='input'>
                    <h1 className="input-hader">Login</h1>
                    <Input_Container className="input-container">
                        {/* email input */}
                        <Input_Group className="input-group">
                            <input
                                // @ts-ignore
                                ref={email}
                                className='input'
                                type="text"
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
                            onClick={() => { loginHandler() }}
                            type='submit'
                            disabled = {buttonDisable}

                        >Login</button>
                        <button onClick={() => { navigat('/') }}>skip</button>
                        <p className="linkp">Not registered? <Link to={'/signup'}>Creat account</Link></p>
                    </Input_Container>
                </Input>
            </form>
            <pre>{JSON.stringify(user,null,4)}</pre>
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

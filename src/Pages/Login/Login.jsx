// @ts-ignore
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useUser } from '../../context/user.context';

// Icons
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Login() {
    const [errorMessage, seteErrorMessage] = useState('');
    const [buttonDisable, setButtonDisable] = useState(false);
    const inputValue = useRef([]);
    const navigate = useNavigate()

    const { user, setUser } = useUser();

    useEffect(() => {
        inputValue.current[0].focus();
    }, [])



    const handleKeyPress = (event, index) => {

        if (event.key === 'Enter') {
            event.preventDefault();

            const nextIndex = index + 1;

            if (nextIndex < inputValue.current.length) {
                // If there is a next input, focus on it
                inputValue.current[nextIndex].focus();
            } else {
                // If it's the last input, blur the current input
                inputValue.current[index].blur();
                loginHandler(event);
            }
        }

        if (event.key === 'Backspace') {
            const preIndex = index - 1;
            if (index > 0 && inputValue.current[index].value === "") {
                inputValue.current[preIndex].focus();
            }

        }
    };

    async function loginHandler(e) {
        e.preventDefault();

        const email = inputValue.current[0]?.value;
        const password = inputValue.current[1]?.value;



        // @ts-ignore


        if (!(email || password)) {
            seteErrorMessage('Please enter a valid email and password');
        }


        try {
            setButtonDisable(true);

            await axios
                .post('http://localhost:8000/api/v1/users/login', { email: email, password: password }, { withCredentials: true })
                .then((response) => {
                    setUser(response.data.user)
                    navigate('/')
                    console.log(response.data);

                })

        } catch (error) {
            console.log(error);
            setButtonDisable(false);


        }
        setButtonDisable(false)
    }
    return (
        <Background>
            <div className='back-to-home'>
                <Link to='/' >
                    <IoIosArrowRoundBack className='arrow' /> Back to home
                </Link>
            </div>

            <Container>
                <span className="input-hader">Welcome back!</span>
                <form onSubmit={(e) => { loginHandler(e) }}>

                    <div className='inputs'>
                        <input
                            // @ts-ignore
                            ref={(e) => (inputValue.current[0] = e)}
                            onKeyDown={(e) => handleKeyPress(e, 0)}
                            className='input'
                            type="text"
                            placeholder='Email'
                            disabled={buttonDisable}
                        />
                        <input
                            className='input'
                            type="password"
                            placeholder='Password'
                            // @ts-ignore
                            ref={(e) => (inputValue.current[1] = e)}
                            onKeyDown={(e) => handleKeyPress(e, 1)}
                            disabled={buttonDisable}
                        />
                    </div>
                    <div className='forget'><Link to={'/forgetPassword'}>Forget your password?</Link></div>
                    <div className='signBTN'>
                        <button
                            className="sign"
                            onClick={(e) => { loginHandler(e) }}
                            type='submit'
                            disabled={buttonDisable}
                        >Login</button>

                        <p className="linkp">Not registered? <Link to={'/signup'}>Creat account</Link></p>
                    </div>
                </form>

            </Container >
            {/* <pre>{JSON.stringify(user, null, 4)}</pre> */}

        </Background >

    )
}

const Background = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .back-to-home{
        width: 100%;
        max-width: 500px;
        align-items: start;
        margin-bottom: 10px;
        .arrow{
           height : 25px;
           width: 25px;
           
        }
        a{
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #878787;
            font-size: 13px;
        }
    }

`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;

    width: 100%;
    max-width: 500px; 
    /* min-height: 550px;  */
    /* margin: 50px auto; */


    /* border: 1px solid black; */
    border-radius: 1rem;
    /* box-shadow: 0 2px 40px #555; */
    
    
    
    padding: 2rem 1.5rem;
    overflow: hidden;

    
    span{
        font-size: 1.5rem;
        color: #000000b5;
    }

    form{
        
        display: flex;
        flex-direction: column; 
        align-items: center;
        justify-content: space-evenly;
        .inputs {
            width: 100%;
            margin-top: 2.5rem;
            display: flex;
            flex-direction: column; 
            gap: 1.5rem;
            input{
                padding: 1rem;
                border-radius: 0.5rem;
                border-style: none;
                background: #F4F4F4;
                &::placeholder{
                    color: #878787;
                    font-size: large;
                }
            }
        }
        .forget{
            margin: 1.5rem;
            text-align: start;
            width: 100%;
            padding-left : 10px;
            a{
                text-decoration: none;
                color: #878787;
            }
        }
        .signBTN{
            width:100%;
            display: flex;
            flex-direction: column;
            align-items: center; 
            button{
             width:100%;
             padding: 1rem;
             border-radius: 0.7rem;
             border: none;
             background: #8e2dec;
             color: #fff;
             font-size: large;
             font-weight: 700;
             cursor: pointer;
             &:disabled{
                background: #878787;
                }
            }
            
            p{
                margin-top: 1.5rem;
                color: #878787;
                a{
                    text-decoration: none;
                    color: #8e2dec;
                }
            }
        }
    }

`
const Input = styled.div`
    
`
const Input_Container = styled.div``
const Input_Group = styled.div``

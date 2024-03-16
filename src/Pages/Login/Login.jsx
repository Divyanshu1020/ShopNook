import axios from 'axios';
import React, { useEffect } from 'react';

//* Services
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//* Context
import { useUser } from '../../context/user.context';

//* Icons
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Login() {

    const { setUser, setCartLength } = useUser();
    const navigate = useNavigate()

    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(1, {message : "Please enter your password"})
      });

    const {
        register,
        handleSubmit,
        setFocus,
        setError,
        formState: { errors, isSubmitting }
    } = useForm(
        {
            defaultValues: {
                email: "test123@gmail.com",
                password: "test123"
            },
            resolver: zodResolver(schema),
        }
    );
    //* set focus on email 
    useEffect(() => {
        setFocus("email");
    }, [setFocus]);

    const onSubmit = async (data) => {
        try {
            await axios
                .post('http://localhost:8000/api/v1/users/login', data, { withCredentials: true })
                .then((response) => {
                    setUser(response.data.user);
                    setCartLength(response.data.user.cart.length);
                    navigate('/')
                    console.log(response.data);
                })
        } catch (error) {
            setError("root", { message: error.message })
        }
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

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='inputs'>
                    <div className='input'>
                        {errors.email && <div className='input-error'>{`${errors.email.message}`}</div>}
                        <input
                            type="email"
                            placeholder="Email"
                            disabled={isSubmitting}
                            {...register("email")}
                        />
                    </div>
                    <div className='input'>
                        {errors.password && <div className='input-error'>{`${errors.password.message}`}</div>}
                        <input
                            type="password"
                            placeholder='Password'
                            disabled={isSubmitting}
                            {...register("password")}
                        />
                    </div>
                </div>
                <div className='forget'><Link to={'/forgetPassword'}>Forget your password?</Link></div>
                <div className='form-bottom'>
                    <button
                        className="sign"
                        type='submit'
                        disabled={isSubmitting}
                    >{isSubmitting ? "Submitting" : "Submit"}</button>
                    <p className="signup-link">Not registered? <Link to={'/signup'}>Creat account</Link></p>
                    <p className='error'>{errors.root?.message}</p>
                </div>
            </form>
        </Container >
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

    border-radius: 1rem;
    
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
            .input{
                width: 100%;
                display: flex;
                flex-direction: column; 
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
                .input-error{
                    color : red;
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
        .form-bottom{
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
            
            .signup-link{
                margin-top: 1.5rem;
                color: #878787;
                a{
                    text-decoration: none;
                    color: #8e2dec;
                }
            }
            .error{
                color: #ff0000b5;
                height: 10px;
            }
        }
    }

`

import React, { useEffect, useState } from 'react';
//* Services
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

//* Icon
import { IoIosArrowRoundBack } from 'react-icons/io';

export default function Signup() {
    const [avatarUrl, setAvatarUrl] = useState("https://res.cloudinary.com/dnq2kbsta/image/upload/v1710539353/assets/l3mestfke7cpfoaq2y8r.png");


    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          const selected = URL.createObjectURL(file);
          setAvatarUrl(selected);
        }
    };

    const schema = z.object({
        name : z.string().min(1, {message : "Please enter your password"}),
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
            resolver: zodResolver(schema),
        }
    );

    const onSubmit = async (data) => {
        try {
            console.log(data);
        } catch (error) {
            setError("root", { message: error.message })
        }
    }

    //* set focus on name 
    useEffect(() => {
        setFocus("name");
    }, [setFocus]);

    // const handleKeyPress = (event, index) => {
    //     console.log(event.key);
    //     if (event.key === 'Enter') {
    //         event.preventDefault();

    //         const nextIndex = index + 1;

    //         if (nextIndex < inputValue.current.length) {
    //             // If there is a next input, focus on it
    //             inputValue.current[nextIndex].focus();
    //         } else {
    //             // If it's the last input, submit the form
    //             loginHandler(event);
    //         }
    //     }

    //     if (event.key === 'Backspace') {
    //         const preIndex = index - 1;
    //         if (index > 0 && inputValue.current[index].value === "") {
    //             inputValue.current[preIndex].focus();
    //         }

    //     }
    // };
    return (
        <Background>
            <div className='back-to-home'>
                <Link to='/' >
                    <IoIosArrowRoundBack className='arrow' /> Back to home
                </Link>
            </div>

            <Container>
                <span className="input-hader">Sign Up on ShopNook</span>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='inputs'>
                        <div className='avatar'>
                            <div className='avatar-img'>
                                <input
                                    className='avatar-input'
                                    type="file"
                                    onChange={(e)=>onImageChange(e)}
                                    accept="image/*" 
                                />
                                <img src={avatarUrl} />
                            </div>
                        </div>

                        <div className='input'>
                            {errors.name && <div className='input-error'>{`${errors.name.message}`}</div>}
                            <input
                                type="text"
                                placeholder='Your Name'
                                disabled={isSubmitting}
                                {...register("name")}
                            />
                        </div>

                        <div className='input'>
                            {errors.email && <div className='input-error'>{`${errors.email.message}`}</div>}
                            <input
                                type="email"
                                placeholder='Email'
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
                    <div className='signBTN'>
                    <button
                        className="sign"
                        type='submit'
                        disabled={isSubmitting}
                    >{isSubmitting ? "Submitting" : "Submit"}</button>
                        <p className="linkp">Not registered? <Link to={'/signup'}>Creat account</Link></p>
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
            margin: 2.5rem 0;
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
            .avatar{
                margin: 0 auto;
                .avatar-img{
                    height: 100px;
                    width: 100px;
                    background: #F4F4F4;
                    border-radius: 50%;
                    position: relative;
                    img{
                        max-width: 100%;
                        max-height: 100%;
                        display: inline-block;
                        border-radius: 50%;
                        border: 1px solid black;
                    }
                    .avatar-input{
                        position: absolute;
                        max-height:100%;
                        max-width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        overflow: hidden;
                        opacity: 0;
                        cursor: pointer;
                        
                    }
                    
                }
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
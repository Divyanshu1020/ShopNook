import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export default function Signup() {
    const [buttonDisable, setButtonDisable] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState("https://w7.pngwing.com/pngs/49/497/png-transparent-biology-management-major-learning-research-user-miscellaneous-angle-company.png");


    const inputValue = useRef([]);

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          const selected = URL.createObjectURL(file);
          setAvatarUrl(selected);
        }
      };

    useEffect(() => {
        inputValue.current[0].focus();
    }, [])
    const handleKeyPress = (event, index) => {
        console.log(event.key);
        if (event.key === 'Enter') {
            event.preventDefault();

            const nextIndex = index + 1;

            if (nextIndex < inputValue.current.length) {
                // If there is a next input, focus on it
                inputValue.current[nextIndex].focus();
            } else {
                // If it's the last input, submit the form
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
    return (
        <Background>
            <div className='back-to-home'>
                <Link to='/' >
                    <IoIosArrowRoundBack className='arrow' /> Back to home
                </Link>
            </div>

            <Container>
                <span className="input-hader">Sign Up on ShopNook</span>
                <form onSubmit={(e) => { console.log('e:', e) }}>

                    <div className='inputs'>
                        <div className='avatar'>
                            <div className='avatar-img'>
                                <input
                                    // @ts-ignore
                                    className='avatar-input'
                                    type="file"
                                    onChange={(e)=>onImageChange(e)}
                                    accept="image/*" 
                                />
                                <img src={avatarUrl} />
                            </div>
                        </div>
                        <input
                            // @ts-ignore
                            ref={(e) => (inputValue.current[0] = e)}
                            onKeyDown={(e) => handleKeyPress(e, 0)}
                            className='input'
                            type="text"
                            placeholder='Username'
                        />
                        <input
                            // @ts-ignore
                            ref={(e) => (inputValue.current[1] = e)}
                            onKeyDown={(e) => handleKeyPress(e, 0)}
                            className='input'
                            type="email"
                            placeholder='Email Address'
                        />
                        <input
                            className='input'
                            type="password"
                            placeholder='Password'
                            // @ts-ignore
                            ref={(e) => (inputValue.current[2] = e)}
                            onKeyDown={(e) => handleKeyPress(e, 1)}
                        />
                    </div>
                    <div className='signBTN'>
                        <button
                            className="sign"
                            onClick={(e) => { console.log('e:', e) }}
                            type='submit'
                            disabled={buttonDisable}
                        >Login</button>
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
                padding: 1rem;
                border-radius: 0.5rem;
                border-style: none;
                background: #F4F4F4;
                &::placeholder{
                    color: #878787;
                    font-size: large;
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
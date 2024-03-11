import React from 'react'
import styled from 'styled-components'
import useApi from '../../../../util/useApi';


export default function Options(props) {
  const { option, title, setApiCalled, apiCalled, handleChange, isChecked } = props
  const {fatchAllProducts} = useApi()

  //* Make API call here
  const handleRadioClick = (value) => {
    if (value !== apiCalled) {

      
      if (title === "Products"){
        fatchAllProducts({categorie : value})
      }

      if(title === "Brands"){
        fatchAllProducts({brand : value})
      }



        //* This thing help me to prevent second call 
        setApiCalled(value);
    }
  };
  return (
    <ListOption className='option'>
      {/* <button>X</button> */}
      <input
        type="radio"
        name={title}
        value={option}
        onClick={(e) => { handleRadioClick(e.currentTarget.value) }}
        onChange={(e) => { handleChange(e) }}
        checked={option === isChecked}
        id={option}
      />
      <label htmlFor={option} >
        <span>{option}</span>
      </label>

    </ListOption>
  )
}

const ListOption = styled.li`
    
      list-style: none;
      display: flex;
      flex-direction: row-reverse;
      justify-content:space-between;
      align-items: center;
      height: 30px;
      /* box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15); */

      &:hover{
        background: rgba(0, 0, 0, 0.08);
      }

      label{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 15px;
        color: #333;
        width: 100%;
        height: 100%;
        
      }
      input{
        display: none;
        &:checked ~ label {
        color: black; // Change color when checkbox is checked
        background: rgba(0, 0, 0, 0.08);
      }
       
      }
      
      
      
    
`

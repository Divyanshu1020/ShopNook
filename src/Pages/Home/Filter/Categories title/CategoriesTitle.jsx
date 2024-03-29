import React, { useState } from 'react';
import { MdOutlineExpandMore } from "react-icons/md";
import styled from 'styled-components';
import { useProductList } from '../../../../context/product.context';
import Options from './Options';

export default function CategoriesTitle(props) {
  const { title, options } = props
  const { setQuery } = useProductList()
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [apiCalled, setApiCalled] = useState("");
  const [isChecked, setIsChecked] = useState("");

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleChange = (event) => {
    setIsChecked(event.target.value)
  }
  const handleClear = () => {
    setIsChecked("");
    setApiCalled("")  //* Clear "apiCalled" ( preventing multiple calls)
    setQuery(pre => (pre.title = ""))
  };

  return (
    <List className="select-categories" >
      <div className="selectBT" onClick={() => { handleDropdownToggle() }}>
        <span className='title'>{title}</span>
        <MdOutlineExpandMore className={`done ${isDropdownOpen ? 'doneDown' : ''}`} />
      </div>
      <ul className={`list ${isDropdownOpen ? 'dropdownOpen' : ''}`} >
        {options.map((option, index) => (
          <Options
            key={index}
            option={option}
            title={title}
            apiCalled={apiCalled}
            setApiCalled={setApiCalled}
            handleChange={handleChange}
            isChecked={isChecked}
          />
        ))}
        <li className='clear-li'>
          <label>
            <span>
              <button className='clear-btn' onClick={() => { handleClear() }}>Clear</button>
            </span>
          </label>
        </li>
      </ul>
    </List>
  )
}

const List = styled.div`
    width: calc(100% - 1.50rem);
    /* margin: 0 0.75rem; */
    position: relative;
    .selectBT{
    /* position: relative; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2rem;
    color: #333;
    font-size: 18px;
    padding: 20px 0;
    cursor: pointer;
    border-bottom : 1px solid #d1d6e0;
  }
  .done{
    transform: rotate(0.5turn);
    
    transition: 0.25s linear; 
  }
  .doneDown{
    transform: rotate(0turn);
  }
  
  
  .list{
    height: fit-content;
    border-bottom : 1px solid #d1d6e0;
    overflow: hidden;
    width: 100%;
    
    top: 100%;
    left: 0;
    transition: 0.25s linear;  
    
  }

  .dropdownOpen{
    position: absolute;

    max-height: 0;
    transition: 0.25s linear;
    border: none;
    
  }
  .clear-li{
    list-style: none;
    height: 30px;
    display: flex;
    justify-content: center;
    label{
      width: 100%;
    }
    .clear-btn{
      width: 100%;
      padding: 1px 8px;
      border: 1px solid #d1d6e0;
      border-radius: 0.5rem;
      margin-left : auto;
      cursor: pointer;
      background : transparent;
      font-size: 1rem;
      color: #333;
    }
  }
  
`

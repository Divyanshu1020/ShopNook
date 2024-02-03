import React, { useState } from 'react'
import styled from 'styled-components';



//icons
import { MdOutlineExpandMore } from "react-icons/md";
import Options from './Options';

export default function CategoriesTitle(props) {
  const {title, options} = props
    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <List className="select-categories" >
          <div className="selectBT" onClick={()=>{handleDropdownToggle()}}>
            <span className='title'>{title}</span>
            <MdOutlineExpandMore className={`done ${isDropdownOpen? 'doneDown': ''}`} />
          </div>
          <ul className={`list ${isDropdownOpen? 'dropdownOpen': ''}`} >
            {options.map((option, index)=>(
              <Options
                key = {index}
                option = {option}
                title = {title}
              />
            ))}
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
`

import React from 'react';
import src from '../../../assets/products/watch-prod-1.webp';
import styled from 'styled-components';
export default function Product() {
    return (
        <Item className="result">
            <div className="img">
                <img src={src} alt="" />
            </div>
            <div className="details">
                <span className='name'>name Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio suscipit ut quo rem necessitatibus hic nihil obcaecati blanditiis voluptas iure repellat officiis distinctio, ratione non corporis voluptates dolores cum. Minus?</span>
                <span className='desc'>description</span>
            </div>

        </Item>

        
    )
}

const Item = styled.div`
    
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    cursor: pointer;
    overflow: hidden;
    .img{
        height: 60px;
        width: 60px;
        flex-shrink: 1;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        overflow: hidden;
        .name {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            line-height: 1;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        .desc{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            line-height: 1;
            font-size: 14px;
            font-weight: 600;
            color: rgba(0,0,0,0.5);
            margin-bottom: 10px;
        }
    }

        
`

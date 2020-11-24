import React from 'react';
import styled from 'styled-components'

const FavoriteButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    box-sizing: border-box;
    position: relative;
    border:  1px solid;
    width: 50px;
    height: 50px;
    background-color: white;
    margin-top: 2px;
   
    &:hover {
        color: grey;
        cursor: pointer;
    }
    &:active {
        transform: scale(0.95);
        box-shadow: 1px 1px 1px 1px grey;
    }
`
const heartStyle = {
    width: '20px',
    height: '24px',
    position: 'absolute'
};
const Favorites = props => {
    const clickHandler = (e) => {
        e.preventDefault();
        props.toggle(props.name);
    }
    return (
        <FavoriteButton
            onClick={clickHandler}>
            {props.favorited ?
                <svg style = {heartStyle}>
                    <path fill="currentColor" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path>
                </svg> :
                <svg  style = {heartStyle}>
                    <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path>
                </svg>}
        </FavoriteButton>
    );
};

module.exports = Favorites;

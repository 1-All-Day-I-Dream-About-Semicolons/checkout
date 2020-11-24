import React from 'react';
import styled from 'styled-components'

const StyledCheckoutButton = styled.button`
    display: inline-flex;    
    justify-content: space-between;
    align-items: center;
    border: none;
    width: 90%;
    height: 50px;
    font-weight: 700;
    background-color: black;
    color: white;   
    position: relative;
    box-shadow: 2px 2px grey;
    &:hover {
        color: grey;
        cursor: pointer;
    }
    &:active {
        transform: translate(3px, 3px)
    }
`
const StyledSizeButton = styled.button`
    display: inline-flex;
    justify-content: space-between;
    border: none;
    width: 100px;
    height: 20px;
    font-weight: 100;
    text-decoration: underline;
    background-color: white;
    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
`
const rulerStyle = {
    width: '20%',
    position: 'relative',
};
const arrowStyle = {
    width: '15%',
    position: 'relative',
};
const uspsStyle = {
    width: '15%',
    position: 'relative',
};

const outOfStockStyle = {
    'width': '125px'
}


const ModalTrigger = (props) => {
    const clickHandler = (e) => {
        e.preventDefault();
        props.toggle(props.modalName);
    }

    return props.modalName === 'Size Guide'
        ? <StyledSizeButton onClick={clickHandler}>
            <svg id="size-guide" viewBox="0 0 19 19" style={rulerStyle}>
                <title>  {props.modalName} </title>
                <g fill="none" stroke="currentColor" stroke-miterlimit="10">
                    <path d="M.5 6.5h18v6H.5z"></path>
                    <path stroke-linecap="square" d="M3.5 12.5v-3m3 3v-2m3 2v-3m6 3v-3m-3 3v-2"></path>
                </g>
            </svg>
            <div> {props.modalName}</div>
        </StyledSizeButton>
        : props.modalName === 'Size Out of Stock?'
            ? <StyledSizeButton onClick={clickHandler} style={outOfStockStyle}> {props.modalName} </StyledSizeButton>
            : props.modalName === 'Checkout Bag'
                ? <StyledCheckoutButton onClick={clickHandler}>
                    <div>{`ADD TO BAG`}</div>
                    <svg id="arrow-right-long" viewBox="0 0 24 24" style={arrowStyle}>
                        <title>arrow-right-long</title>
                        <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                    </svg>

                </StyledCheckoutButton>
                : <StyledSizeButton onClick={clickHandler} style= {{'width': '100%', 'height': '100%'}}>
                    <svg id="usp-delivery" viewBox="0 0 19 19" style = {uspsStyle}>
                        <title>usp-delivery</title>
                        <g fill="none" stroke="currentColor" stroke-miterlimit="10">
                            <path d="M13.42 13.5H9.5"></path>
                            <path stroke-linecap="square" d="M4.5 5.5h10l4 3v5h-2m-10 0h-2m0-6h-4"></path>
                            <circle cx="8" cy="13" r="1.5"></circle>
                            <circle cx="15" cy="13" r="1.5"></circle>
                            <path stroke-linecap="square" d="M1.5 9.5h3m-2 2h2"></path>
                        </g>
                    </svg>
                    {`JOIN CREATORS CLUB TO GET UNLIMITED FREE SHIPPING, RETURNS, & EXCHANGES`}
                </StyledSizeButton>

}

module.exports = ModalTrigger;



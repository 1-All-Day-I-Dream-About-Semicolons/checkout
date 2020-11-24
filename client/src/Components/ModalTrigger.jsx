import React from 'react';
import styled from 'styled-components'

const ModalButton = styled.button`
padding: 10px;padding: 10px;
font-size: 1.2em;
font-weight: bold;
background: white;
border: 3px solid black;
border-radius: 10px;
cursor: pointer;
transition: background 0.15s ease-out;
&:hover {
    background: black;
    color: white;
}
`
const StyledSizeButton = styled.button`
    display: inline-flex;
    justify-content: space-between;
    border: none;
    width: 100px;
    height: 20px;
    text-decoration: underline;
    font-weight: 100;
    background: white;
    &:hover {
        background: black;
        color: white;
        cursor: pointer;
    }
`
const sizeStyle = {
    width: '20%',
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
            <svg id="size-guide" viewBox="0 0 19 19" style = {sizeStyle}>
                <title>  {props.modalName} </title>
                <g fill="none" stroke="currentColor" stroke-miterlimit="10">
                    <path d="M.5 6.5h18v6H.5z"></path>
                    <path stroke-linecap="square" d="M3.5 12.5v-3m3 3v-2m3 2v-3m6 3v-3m-3 3v-2"></path>
                </g>
            </svg>
            <div> {props.modalName}</div>
        </StyledSizeButton>
        : props.modalName === 'Size Out of Stock?'
? <StyledSizeButton onClick={clickHandler} style = {outOfStockStyle}> {props.modalName} </StyledSizeButton>
            : props.modalName === 'Checkout Bag'
                ? <ModalButton onClick={clickHandler}> {props.modalName}</ModalButton>
                : <ModalButton onClick={clickHandler}> {props.modalName}</ModalButton>

}

module.exports = ModalTrigger;



/* <button data-auto-id="size-chart-link" class="size-chart-link___1VPia gl-link gl-label gl-label--s" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">
    <svg class="gl-icon gl-icon--size-communication" data-di-res-id="6ed540c5-2319c14e" data-di-rand="1606187919283">
        <use xlink:href="#size-guide"></use>
        </svg>Size guide</button >
    <button data-auto-id="size-chart-link" class="size-chart-link___1VPia gl-link gl-label gl-label--s" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">
        <svg class="gl-icon gl-icon--size-communication" data-di-res-id="6ed540c5-2319c14e" data-di-rand="1606187919283">
            <use xlink:href="#size-guide"></use>
                </svg>Size guide
                </button > */

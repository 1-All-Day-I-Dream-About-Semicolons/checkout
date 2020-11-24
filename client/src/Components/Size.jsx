import React from 'react';
import styled from 'styled-components'

const SizeButton = styled.button`
    border: 1px solid #ebedee;
    border-left: none;
    margin-bottom: -1px;
    font-feature-settings: "frac";
    height: 40px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    line-height: 1em;
    cursor: pointer;
    letter-spacing: -.2px;
    font-size: 13px;
    background: white;
    transition: background 0.15s ease-out;
    &:hover {
        background: black;
        color: white;
    }
`

const Size = (props) => {
    const clickHandler = (e) => {
        e.preventDefault();
        props.toggle('Sizes in Stock', props.index);
    }
    return <SizeButton onClick={clickHandler} className="modal-button">{props.item.size}</SizeButton>;
}

module.exports = Size;
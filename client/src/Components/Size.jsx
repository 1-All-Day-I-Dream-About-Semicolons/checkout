import React from 'react';
import styled from 'styled-components'

const SizeButton = styled.button`
padding: 10px;
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

const Size = (props) => {
    const clickHandler = (e) => {
        e.preventDefault();
        props.toggle('Sizes in Stock', props.index);
    }
    return <SizeButton onClick={clickHandler} className="modal-button">{props.item.size}</SizeButton>;
}

module.exports = Size;
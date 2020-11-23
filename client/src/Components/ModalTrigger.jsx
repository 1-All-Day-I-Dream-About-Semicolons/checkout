import React from 'react';
import styled from 'styled-components'

const ModalButton = styled.button`
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


const ModalTrigger = (props) => {
    const clickHandler = (e) => {
        e.preventDefault();
        props.toggle(props.modalName);
    }

    return <ModalButton onClick={clickHandler}>{props.modalName}</ModalButton>;
}

module.exports = ModalTrigger;

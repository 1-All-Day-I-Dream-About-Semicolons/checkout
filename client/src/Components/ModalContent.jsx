import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components'

const ModalArea = styled.div`
    position: fixed;
    padding: 2.5em 1.5em 1.5em 1.5em;
    background-color: #ffffff;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    left: 50%;
    top: 50%;
    height: auto;
    transform: translate(-50%, -50%);
    max-width: 30em;
    max-height: calc(100% - 1em);
`
const ModalClose = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5em;
    line-height: 1;
    background: #f6f6f7;
    border: 0;
    box-shadow: 0;
    cursor: pointer;
    &:hover {
        background: black;
        color: white;
    }
`
const ModalBody = styled.div`
padding-top: 0.25em;
`
const ModalCover = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 10;
transform: translateZ(0);
background-color: rgba(0, 0, 0, 0.5);
`


const ModalContent = (props) => {

    const clickHandler = (e) => {
        e.preventDefault();
        props.toggle(props.modalName);
    }
    return ReactDOM.createPortal(
        <ModalCover
            className="modal-cover"
            role="dialog"
            tabIndex="-1"
            onKeyDown={props.onKeyDown}
            onClick={props.onClickOutside}>
            <ModalArea>
                <ModalClose onClick={clickHandler}>X</ModalClose>
                <ModalBody>{props.content}</ModalBody>
            </ModalArea>
        </ModalCover>,
        document.body
    );
}

module.exports = ModalContent;

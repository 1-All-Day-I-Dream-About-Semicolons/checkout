import React from 'react';
import ReactDOM from 'react-dom';


const ModalContent = (props) => {

    const clickHandler = (e) => {
        e.preventDefault();
        props.toggle(props.modalName);
    }
    return ReactDOM.createPortal(
        <div
            className="modal-cover"
            role="dialog"
            tabIndex="-1"
            onKeyDown={props.onKeyDown}
            onClick = {props.onClickOutside}>
            <div className="modal-area">
                <button className="_modal-close" onClick={clickHandler}>X</button>
                <div className="modal-body">{props.content}</div>
            </div>
        </div>,
        document.body
    );
}

module.exports = ModalContent;

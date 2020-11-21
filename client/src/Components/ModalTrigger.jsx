import React from 'react';


const ModalTrigger = (props) => {
    const clickHandler = (e) => {
        e.preventDefault();
        props.toggle(props.modalName);
    }

    return <button onClick={clickHandler} className="modal-button">{props.modalName}</button>;
}

module.exports = ModalTrigger;

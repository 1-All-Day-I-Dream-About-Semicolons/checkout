import React from 'react';
import ReactModal from 'react-modal';

const SizeGuide = (props) => {

    var handleClick = (e) => {
        e.preventDefault();
        props.close();
    }

    return (<ReactModal
        className="Modal"
        overlayClassName="Overlay"
        isOpen={true}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={props.close}
    >
        <button onClick={handleClick}> X </button>
        <p>Modal Content</p>
    </ReactModal>)

}

module.exports = SizeGuide;

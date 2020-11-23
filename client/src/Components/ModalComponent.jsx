import React from 'react';
import ModalTrigger from './ModalTrigger.jsx';
import ModalContent from './ModalContent.jsx';


const ModalComponent = (props) => {
    const onKeyDown = (e) => {
        e.preventDefault();
        if (e.keyCode === 27) {
            props.toggle(props.modalName);
        }
    }
    const onClickOutside = (e) => {
        e.preventDefault();
        if (e.target.className === 'sc-jSgupP ckDfJz modal-cover') {
            props.toggle(props.modalName);
        }
    }

    return (
        <React.Fragment>
            <ModalTrigger modalName={props.modalName} toggle={props.toggle} />
            {props.show ?
                <ModalContent
                    toggle={props.toggle}
                    modalName={props.modalName}
                    content={props.content}
                    onKeyDown={onKeyDown}
                    onClickOutside={onClickOutside} />
                :<React.Fragment />}
        </React.Fragment>
    );
}

module.exports = ModalComponent;

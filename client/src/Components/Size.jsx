import React from 'react';


const Size = (props) => {
    const clickHandler = (e) => {
        e.preventDefault();
        props.toggle('Sizes in Stock', props.index);
    }
    return <button onClick={clickHandler} className="modal-button">{props.item.size}</button>;
}

module.exports = Size;
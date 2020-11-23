import React from 'react';


const Favorites = props => {
    const clickHandler = (e) => {
        e.preventDefault();
        props.toggle(props.name);
    }
    return (
        <div
            onClick={clickHandler}>
            {props.favorited ?
                <svg>
                    <path fill="currentColor" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path>
                </svg> :
                <svg>
                    <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path>
                </svg>}
        </div>
    );
};

module.exports = Favorites;

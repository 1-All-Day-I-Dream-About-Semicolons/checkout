import React from 'react';
import Size from './Size.jsx';


const Sizes = (props) => {
    return (
        <React.Fragment>
            <div>{props.stock.map((item, i) => {
                return <Size item={item} index={i} toggle={props.toggle} />
            })}</div>
            {props.show !== -1 ?
                (props.stock[props.show].quantity < 20 ?
                    props.stock[props.show].quantity < 10 ?
                        <div className='stock-message'> {`Only ${props.stock[props.show].quantity} left in stock.`}</div>
                        : <div className='stock-message'> Low on Stock</div>
                    : <React.Fragment />)
                : <React.Fragment />}
        </React.Fragment>
    );
}

module.exports = Sizes;
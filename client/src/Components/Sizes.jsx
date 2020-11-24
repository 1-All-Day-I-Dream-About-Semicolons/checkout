import React from 'react';
import Size from './Size.jsx';
import styled from 'styled-components'

const StyledSizes = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(70px,1fr));
    border-left: 1px solid #ebedee;
    flex-wrap: wrap;
`

const Sizes = (props) => {
    return (
        <React.Fragment>
            <StyledSizes>{props.stock.map((item, i) => {
                return <Size item={item} index={i} toggle={props.toggle} />
            })}</StyledSizes>
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
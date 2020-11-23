import React from 'react';
import ModalComponent from './ModalComponent.jsx';

class Bag extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ModalComponent
            toggle={this.props.toggle}
            modalName={'Checkout Bag'}
            content={'PLACEHOLDER CONTENT'}
            show={this.props.show} />
        );
    }
}
module.exports = Bag;
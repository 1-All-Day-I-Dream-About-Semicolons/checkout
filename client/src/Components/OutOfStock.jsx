import React from 'react';
import ModalComponent from './ModalComponent.jsx';

class OutOfSTock extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ModalComponent
            toggle={this.props.toggle}
            modalName={'Size Out of Stock?'}
            content={'PLACEHOLDER CONTENT'}
            show={this.props.show} />
        );
    }
}
module.exports = OutOfSTock;
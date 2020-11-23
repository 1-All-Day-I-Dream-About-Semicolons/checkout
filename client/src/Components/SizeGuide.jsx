import React from 'react';
import ModalComponent from './ModalComponent.jsx';

class SizeGuide extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ModalComponent
            toggle={this.props.toggle}
            modalName={'Size Guide'}
            content={'PLACEHOLDER CONTENT'}
            show={this.props.show} />
        );
    }
}
module.exports = SizeGuide;
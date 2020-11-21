import React from 'react';
import ModalComponent from './ModalComponent.jsx';

class Join extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ModalComponent
            toggle={this.props.toggle}
            modalName={'Join Creators Club'}
            content={'PLACEHOLDER CONTENT'}
            show={this.props.show} />
        );
    }
}
module.exports = Join;
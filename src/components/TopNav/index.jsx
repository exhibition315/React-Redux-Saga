import React from 'react';
import PropTypes from 'prop-types';

export default class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onNavClick();
    }

    render() {
        return (
            <div className="topnav">
                <a href="localhost:4000" onClick={this.onClick}>Google</a>
                <a href="localhost:4000">YAHOO</a>
                <a href="localhost:4000">Bing</a>
                <a href="localhost:4000" style={{ float: 'right' }}>facebook</a>
            </div>
        );
    }
}

TopNav.propTypes = {
    onNavClick: PropTypes.func
};

TopNav.defaultProps = {
    onNavClick: undefined
};

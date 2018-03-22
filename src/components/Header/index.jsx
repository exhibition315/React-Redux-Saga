import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Header = (props) => {
    const { title, description } = props;

    const comp = (
        <div className="header">
            <FormattedMessage id="name" values={{ someone: <b>{title}</b> }} tagName="h1" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );

    return comp;
};

export default Header;

Header.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

Header.defaultProps = {
    title: 'Header',
    description: 'This is description'
};

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import { selectToken, selectState } from './selector';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import TopNav from '../../components/TopNav/index';
import Row from '../../components/Row/index';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.onNavClick = this.onNavClick.bind(this);
    }

    onNavClick() {
        this.props.fetchData('Google');
    }

    render() {
        const { token, state } = this.props;
        const p1 = `Token: ${token}`;
        const p2 = `State: ${state}`;

        return (
            <div>
                <Header title={p1} description={p2} />
                <TopNav onNavClick={this.onNavClick} />
                <Row />
                <Footer />
            </div>
        );
    }
}

Main.propTypes = {
    fetchData: PropTypes.func,
    token: PropTypes.string,
    state: PropTypes.string
};

Main.defaultProps = {
    fetchData: undefined,
    token: '',
    state: ''
};

const mapStateToProps = (state) => {
    const props = {
        token: selectToken(state),
        state: selectState(state)
    };
    return props;
};

const mapDispatchToProps = (dispatch) => {
    const dispatches = {
        fetchData: (text) => dispatch(fetchData(text)),
    };
    return dispatches;
};

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default MainContainer;

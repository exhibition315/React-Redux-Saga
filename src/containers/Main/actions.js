import * as types from './actionTypes';

export const fetchDataSuccess = (token) => {
    const action = {
        type: types.FETCH_DATA_SUCCESS,
        token
    };
    return action;
};

export const fetchDataFail = (error) => {
    const action = {
        type: types.FETCH_DATA_FAL,
        error
    };
    return action;
};

export const fetchData = (text) => {
    const action = {
        type: types.FETCH_DATA,
        text
    };
    return action;
};

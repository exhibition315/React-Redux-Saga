import { createSelector } from 'reselect';

const getFetchData = (state) => state.mainReducer;

export const selectToken = createSelector(
    getFetchData,
    (data) => data.get('token')
);

export const selectState = createSelector(
    getFetchData,
    (data) => data.get('state')
);

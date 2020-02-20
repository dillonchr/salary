import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const initialState = {
    jobs: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'show-job':
            return {
                ...state,
                selectedJob: action.value
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default () => <Provider store={store}><App /></Provider>;

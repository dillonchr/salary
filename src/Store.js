import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import massageJobsData from './massage-jobs-data';

const initialState = {
    jobs: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'jobs-loaded':
            return {
                ...state,
                jobs: massageJobsData(action.value)
            };
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

fetch('jobs.json')
    .then(r => r.json())
    .then(value => store.dispatch({type: 'jobs-loaded', value}));

export default () => <Provider store={store}><App /></Provider>;

import React from 'react';
import { connect } from 'react-redux';
import './graph.css';

const mapStateToProps = state => ({
    jobs: state.jobs
});

const Graph = props => {
    const bars = props.jobs.map((job, i) => {
        const style = {
            width: `${job.percent}%`,
            backgroundColor: `#${((1 << 24) * Math.random() | 0).toString(16)}`
        };
        const selectJob = () => props.dispatch({ type: 'show-job', value: job });
        return <div key={i} className="graph__job" style={style} onMouseOver={selectJob}></div>;
    });


    return (
        <div className="graph">
            {bars}
        </div>
    );
};

export default connect(mapStateToProps)(Graph);
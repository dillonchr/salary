import React from 'react';
import { connect } from 'react-redux';
import { css } from 'glamor';

const styles = {
    graph: css({
        display: 'flex',
        width: '100%',
        height: 'calc(100vh - 200px)',
    }),
    job: css({
        float: 'left'
    })
};

const mapStateToProps = state => ({
    jobs: state.jobs
});

const Job = connect()(({
    job,
    dispatch,
}) => {
    const style = css(
        styles.job,
        {
            width: `${job.percent}%`,
            height: `${job.wageDifference.absolutePercent}%`,
            backgroundColor: `#${((1 << 24) * Math.random() | 0).toString(16)}`
        },
    );
    const selectJob = () => dispatch({ type: 'show-job', value: job });
    return (
        <div {...style} onMouseOver={selectJob} />
    );
});

const Graph = ({
    jobs,
}) => {
    const bars = jobs.map((job, i) => {
        return <Job key={i} job={job} />;
    });

    return (
        <div {...styles.graph}>
            {bars}
        </div>
    );
};

export default connect(mapStateToProps)(Graph);

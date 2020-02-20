import React from 'react';
import { connect } from 'react-redux';
import { css } from 'glamor';
import fetchJobs from './fetch-jobs';

const styles = {
    graph: css({
        display: 'flex',
        width: '100%',
        height: 'calc(100vh - 200px)',
        alignItems: 'flex-end',
    }),
    job: css({
        backgroundColor: 'currentColor',
        border: 'solid 5px currentColor',
        boxSizing: 'border-box',
        float: 'left',
        ':hover': {
            backgroundColor: '#000',
        }
    })
};

const Job = connect()(({
    job,
    dispatch,
}) => {
    const color = `#${((1 << 24) * Math.random() | 0).toString(16)}`
    const style = css(
        styles.job,
        {
            color,
            width: `${job.percent}%`,
            height: `${job.wageDifference.absolutePercent}%`,
        },
    );
    const selectJob = () => dispatch({ type: 'show-job', value: job });
    return (
        <div {...style} onMouseOver={selectJob} />
    );
});

export default () => {
    const [jobs, setJobs] = React.useState([]);

    React.useEffect(() => {
        fetchJobs().then((jobs) => {
            setJobs(jobs.map((job, i) => {
                return <Job key={i} job={job} />;
            }));
        });
    }, []);

    return (
        <div {...styles.graph}>{jobs}</div>
    );
};

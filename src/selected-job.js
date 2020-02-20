import React from 'react';
import { connect } from 'react-redux';
import { css } from 'glamor';

const styles = {
    percent: css({
        color: '#333',
        float: 'right',
    }),
};

const getSalary = (job) => {
    const salary = job.salary || job.wage * 40 * 53;
    return `$${salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} /yr`;
};

const mapStateToProps = state => ({
    job: state.selectedJob
});

const SelectedJob = ({
    job
}) => {
    if (!job) {
        return null;
    }

    return (
        <div>
            <h1>{getSalary(job)} (${job.wage} /hr)</h1>
            <h2>
                <span>${job.wageDifference.dollars}</span>
                <span {...styles.percent}>{job.wageDifference.percent}%</span>
            </h2>
            <h3>{job.position} @ {job.company}</h3>
        </div>
    );
};

export default connect(mapStateToProps)(SelectedJob);

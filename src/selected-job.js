import React from 'react';
import { connect } from 'react-redux';
import { css } from 'glamor';

const styles = {
    percent: css({
        color: '#333',
        float: 'right',
    }),
};

const mapStateToProps = state => ({
    selectedJob: state.selectedJob
});

const SelectedJob = ({
    selectedJob,
}) => {
    if (!selectedJob) {
        return null;
    }

    return (
        <div>
            <h1>${selectedJob.wage}/hr</h1>
            <h2>
                <span>${selectedJob.wageDifference.dollars}</span>
                <span {...styles.percent}>{selectedJob.wageDifference.percent}%</span>
            </h2>
            <h3>{selectedJob.position} @ {selectedJob.company}</h3>
        </div>
    );
};

export default connect(mapStateToProps)(SelectedJob);

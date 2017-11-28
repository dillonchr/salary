import React from 'react';
import { connect } from 'react-redux';
import './selected-job.css';

const mapStateToProps = state => ({
    selectedJob: state.selectedJob
});

const SelectedJob = ({selectedJob}) => {

    if (!selectedJob) {
        return null;
    }

    return (
        <div className="selected-job">
            <h1>${selectedJob.wage}/hr</h1>
            <h2>
                <span>${selectedJob.wageDifference.dollars}</span>
                <span class="selected-job__percent">{selectedJob.wageDifference.percent}%</span>
            </h2>
            <h3>{selectedJob.position} @ {selectedJob.company}</h3>
        </div>
    );
};

export default connect(mapStateToProps)(SelectedJob);

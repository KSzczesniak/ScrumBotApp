import React, { Fragment } from 'react';
import {
    Badge
} from 'reactstrap';

import { setColorForType } from '../utility'

const Summary = ({ summary }) => {

    let id = 0;
    const summaryComponent = Object.keys(summary).map(taskType => {
        return (
            <Fragment key={id++}>
                <div className="d-flex justify-content-between align-items-center mb-1">
                    <Badge color={setColorForType(taskType)}>
                        {taskType.toUpperCase()} :
                    </Badge>
                    <strong>
                        {summary[taskType].sum}
                    </strong>
                </div>
                {
                    Object.keys(summary[taskType].stages).map(stage => {
                        return (
                            <div key={id++} className="d-flex justify-content-between align-items-center mb-1 ml-1">
                                <Badge color="info">
                                    {stage}:
                                </Badge>
                                <strong>
                                    {summary[taskType].stages[stage]}
                                </strong>
                            </div>
                        )
                    })
                }
            </Fragment>
        );
    });

    return (
        <Fragment>
            {summaryComponent}
        </Fragment>
    )
}

export default Summary

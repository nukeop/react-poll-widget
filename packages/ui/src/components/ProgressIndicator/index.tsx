import React from 'react';

import './styles.scss';

const PI = 3.1415;
const R = 10;
const ProgressIndicator: React.FC<{
    step: number,
    stepsTotal: number
}> = ({
    step,
    stepsTotal
}) => (
            <svg className='progress-indicator'>
                <circle
                    cx='12'
                    cy='12'
                    r={R}
                />
                <circle
                    cx='12'
                    cy='12'
                    r={R}
                    stroke-dasharray={2 * PI * R}
                    stroke-dashoffset={2 * PI * R * (step / stepsTotal)}
                />
            </svg>
        );

export default ProgressIndicator;
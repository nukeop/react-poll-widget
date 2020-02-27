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
            <div className="progress-indicator">
                <svg>
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
                        stroke-dashoffset={2 * PI * R * (1 - (step / stepsTotal))}
                    />
                </svg>
            </div>
        );

export default ProgressIndicator;
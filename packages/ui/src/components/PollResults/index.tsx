import React from 'react';
import { Progress } from 'semantic-ui-react';

import { PollResult } from '../types';
import './styles.scss';

const PollResults: React.FC<{
  results: PollResult[]
}> = ({
  results
}) => (
      <div className='poll-results'>
        {
          results.map(result => (
            <div
              key={result.option.id}
              className='poll-result'
            >
              <Progress
                percent={result.score}
              />
              <label>
                <span className='score'>
                  {result.score}%
                </span>
                <span className="label">
                  {result.option.label}
                </span>
              </label>
            </div>
          ))
        }
      </div>
    );

export default PollResults;
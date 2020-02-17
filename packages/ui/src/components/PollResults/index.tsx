import React from 'react';
import { Progress } from 'semantic-ui-react';

import './styles.scss';

type PollResult = {
  label: string;
  score: number;
};

const PollResults: React.FC<{
  results: PollResult[]
}> = ({
  results
}) => (
      <div className='poll-results'>
        {
          results.map(result => (
            <div className='poll-result'>
              <Progress
                percent={result.score}
              />
              <label>
                <span className='score'>
                  {result.score}%
                </span>
                <span className="label">
                  {result.label}
                </span>
              </label>
            </div>
          ))
        }
      </div>
    );

export default PollResults;
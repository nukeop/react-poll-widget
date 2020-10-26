import React from 'react';
import cx from 'classnames';
import map from 'lodash/map';
import max from 'lodash/max';

import './styles.scss';

import { PollResult } from '../types';
const ButtonGroupResults: React.FC<{
  results: PollResult[]
}> = ({
  results
}) => {
    const scores = map(results, result => result.score);
    const maxScore = max(scores);
    return (
      <div className='button-group-results'>
        {
          results.map(result => (
            <div
              key={result.option.id}
              className={cx(
                'button-group-result',
                { winner: maxScore === result.score }
              )}
              style={{ flex: `1 1 ${result.score}%` }}
            >
              <label>
                <span className='label'>{result.option.label}</span>
                <span className='score'>{result.score}%</span>
              </label>
            </div>
          ))
        }
      </div>
    );
  }

export default ButtonGroupResults;
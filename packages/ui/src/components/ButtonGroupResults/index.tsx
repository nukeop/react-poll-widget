import React from 'react';
import cx from 'classnames';
import _ from 'lodash';

import './styles.scss';

import { PollResult } from '../types';
const ButtonGroupResults: React.FC<{
  results: PollResult[]
}> = ({
  results
}) => {
    const scores = _.map(results, 'score');
    const maxScore = _.max(scores);
    return (
      <div className='button-group-results'>
        {
          results.map(result => (
            <div
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
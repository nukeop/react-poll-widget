import React from 'react';
import cx from 'classnames';
import { Button, Icon } from 'semantic-ui-react';

import { PanelColor } from '../../types';
import './styles.scss';

const PanelContentFooter: React.FC<{
  hasSubmit: boolean,
  hasNext: boolean,
  hasBack: boolean,
  onSubmit?: () => void,
  onNext?: () => void,
  onBack?: () => void,
  color: PanelColor
}> = ({
  hasSubmit,
  hasNext = true,
  hasBack,
  onSubmit,
  onNext,
  onBack,
  color = 'black'
}) => (
      <div className={'panel-content-footer'}>
        <div className={cx(
          'right-aligned row',
          { 'two-buttons': hasSubmit && hasNext }
        )} >
          {
            hasSubmit &&
          <Button icon labelPosition='right' color='green' onClick={onSubmit}>
            Submit
            <Icon name='checkmark' />
          </Button>
        }
          {
          hasNext &&
          <Button icon labelPosition='right' className={color} onClick={onNext}>
            Next
            <Icon name='long arrow alternate right' />
          </Button>
          }
        </div>
        {
          hasBack &&
          <div className='left-aligned row'>
            <Button basic icon labelPosition='left' size='tiny' onClick={onBack}>
              Back
              <Icon name='long arrow alternate left' />
            </Button>
          </div>
        }
      </div>
    );

export default PanelContentFooter;
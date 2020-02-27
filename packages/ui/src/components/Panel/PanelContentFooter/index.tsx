import React from 'react';
import cx from 'classnames';
import { Button, Icon } from 'semantic-ui-react';

import { PanelColor } from '../../types';
import './styles.scss';

const BackButton: React.FC<{
  onBack?: () => void
}> = ({
onBack
}) => (
      <Button basic icon labelPosition='left' size='tiny' onClick={onBack}>
        Back
              <Icon name='long arrow alternate left' />
      </Button>
    );

const PanelContentFooter: React.FC<{
  hasSubmit: boolean,
  hasNext: boolean,
  hasBack: boolean,
  nextDisabled: boolean,
  submitDisabled: boolean,
  onSubmit?: () => void,
  onNext?: () => void,
  onBack?: () => void,
  color: PanelColor
}> = ({
  hasSubmit,
  hasNext = true,
  hasBack,
  nextDisabled,
  submitDisabled,
  onSubmit,
  onNext,
  onBack,
  color = 'black'
}) => (
      <div className={'panel-content-footer'}>
        <div className={cx(
          'right-aligned row',
          { 'two-buttons': hasBack || hasSubmit && hasNext }
        )} >
          {
            ((hasBack && !hasNext) || (hasBack && !hasSubmit)) &&
            <BackButton onBack={onBack} />
          }
          {
            hasSubmit &&
            <Button
              disabled={submitDisabled}
              icon
              labelPosition='right'
              color='green'
              onClick={onSubmit}
            >
              Submit
            <Icon name='checkmark' />
            </Button>
          }
          {
            hasNext &&
            <Button
              disabled={nextDisabled}
              icon
              labelPosition='right'
              className={color}
              onClick={onNext}
            >
              Next
            <Icon name='long arrow alternate right' />
            </Button>
          }
        </div>
        {
          hasBack && hasSubmit && hasNext &&
          <div className='left-aligned row'>
            <BackButton onBack={onBack}/>
          </div>
        }
      </div>
    );

export default PanelContentFooter;